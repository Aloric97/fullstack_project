
//importing libraries from the modules
const express= require('express')
const dotenv= require('dotenv').config()
const bodyParser= require('body-parser')

//importing routes from the routes carpet
const indexRoutes = require('./routes/index')


const app= express();

PORT=process.env.PORT || 3001

//parser json values
app.use(bodyParser.json())

//parser form-urlencoded values
app.use(bodyParser.urlencoded({ extended:true }))

//calling imported routes
app.use(indexRoutes)

app.listen(PORT,() =>{
    console.log(`app listening on ${PORT}`)
})

