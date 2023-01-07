//importig routes
const routes= require('express').Router()
const {createApp, getAllApps,orderPrecioASC} =require('../controllers/appController')



routes.post('/createApp',createApp)
routes.get('/getAllApps',getAllApps)
routes.get('/application',orderPrecioASC)



module.exports=routes