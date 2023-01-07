
//importing model app
const application= require('../models/app')

const createApp= async (req,res)=>{
    const {nombre,precio,image,aprobado}=req.body

    if(!(nombre && precio && image)){
        res.status(404).json({error:true,message:' there are inputs emptys'})
    }

    const newApp = await application.create({nombre,precio,image,aprobado})
    .then(res.status(200).json({message:'the app has been created successfully'}))
    .catch((err)=>res.status(400).json({message:'the app could not be created successfully', error:err}))
}

const getAllApps= async (req, res) => {
    const allApps= await application.findAll()
    .then((data)=>{res.status(200).json({data})})
    .catch((err)=>{res.status(400).json({err:err})})
}

const orderPrecioASC = async (req, res) => {
    const order =(req.query.order).toLowerCase();
    console.log(order)
    const getApps= await application.findAll()
    .then(data=>Object.values(data))
    .catch((err)=>{res.status(400).json({error:err})})


    if (order=="asc"){
        const appAsc = getApps.sort((a,b)=>a.precio-b.precio)
        return res.json(appAsc)
    } else{
        return res.json(getApps)
    }
}


module.exports={
    createApp,
    getAllApps,
    orderPrecioASC
}