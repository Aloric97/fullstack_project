const routes = require('express').Router()
const user= require('../models/user')
const rol = require('../models/rol')


//we create the user with all attributes for test
routes.post('/createTestUser',async(req,res)=>{
    const firstName ='test'
    const lastName ='lastTest'
    const email = 'test@example.com'
    const password = 'test1234'

    const newUser = await user.create({firstName:firstName,lastName:lastName,email:email,password:password})
    .then(()=>{
        res.status(201).json({create:true,info:'user was created successfully'})
        console.log('user was created successfully')
        }
    )
    .catch(err=>{
        res.status(400).json({
            create:false,
            error:err
        })
    })
})

routes.get('/findTestUser',async(req,res)=>{
    const users = await user.findOne({
        where:{ email:'test@example.com'},
        include:{
            model:rol,
            attributes:['name', 'description']
        }
    })
    .then((data)=>{
        res.status(200).json(data)
        console.log('rol encontrado')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al mostrar los datos')
    })
})

//we create the rol with all attributes for test
routes.post('/createTestRol',async (req,res)=>{
    const name ='rolTests'
    const description= 'user created only for test'
    const User= await user.findOne({where:{email:'test@example.com'}})
    const idUser=User.id

    const newRol = await rol.create({userId:idUser,name,description})
    .then(()=>{
        res.status(201).json({create:true,info:'rol was created successfully'})
        console.log('rol was created successfully')
        }
    )
    .catch(err=>{
        res.status(400).json({
            create:false,
            error:err
        })
    })

})

routes.get('/findTestRol',async(req,res)=>{
    

    const roles = await rol.findOne({where:{name:'rolTests'}})
    .then((data)=>{
        res.status(200).json(data)
        console.log('lista de rol completa')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al mostrar los datos')
    })
})



module.exports=routes