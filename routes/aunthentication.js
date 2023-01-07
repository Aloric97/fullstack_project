//importing libraries from modules
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const routes = require('express').Router()
const dotenv = require('dotenv').config()

//importing modules from models
const user =require('../models/user')
const rol = require('../models/rol')


routes.post('/register',async(req,res)=>{
    const {firstName, lastName,email,password}=req.body

    const verifyEmail= await user.findOne({where: {email: email}})

    if (verifyEmail){
        res.status(400).json({error:'this email is already in use'})
    }
    const salt= bcrypt.genSaltSync(10)
    const encryptedPassword= bcrypt.hashSync(password,salt)

    const newUser = await user.create(
        {
            firstName:firstName,
            lastName:lastName,
            email:email.toLowerCase(),
            password:encryptedPassword
        }
    )
    .then(async() => {
        const findRole= await rol.findOne({where:{name:'common'}})
        const idUser=findRole.id
        await user.update({rolId:idUser}, {where: {email:email}})
        res.status(200).json({create:true, message:'the user has been created successfully'})
    })
    .catch(err => {
        res.status(400).json({create:false, message:err})
    })

})

routes.post("/login", async (req, res) => {
    email=req.body.email
    password=req.body.password


    //check if email is exist
    const checkUser= await user.findOne({ where: { email: email }})
 
    if(!checkUser){
     return res.status(401).json({ message: 'Authentication failed. Invalid email' });
    }
 
    if(!bcrypt.compareSync(password, checkUser.password)){
     return res.status(401).json({ message: 'Authentication failed. Invalid password' });
    }
 
    const token=jwt.sign(
        {
            email:checkUser.email,
            id:checkUser.id
        },
        process.env.TOKEN_KEY,
        {
            expiresIn:process.env.EXPIRES
        }
    )
     

     return res.status(201).json({
         ok: true,
         email: email,
         token,
     }) 
 });



module.exports=routes