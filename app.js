
//importing libraries from the modules
const express= require('express')
const dotenv= require('dotenv').config()
const bodyParser= require('body-parser')
const morgan = require('morgan')
const cors =require('cors')

//importing routes from the routes carpet
const indexRoutes = require('./routes/index')
const testRoutes = require('./test/userRol')
const registerLogin = require('./routes/aunthentication')
const appRoutes = require('./routes/appRoutes')

const {connectDB} = require('./config/database')
const createTable= require('./config/createTables')

const app= express();

PORT=process.env.PORT || 3001

//parser json values
app.use(bodyParser.json())

//parser form-urlencoded values
app.use(bodyParser.urlencoded({ extended:true }))

//using the morgan module
app.use(morgan('common'))

//calling imported routes
app.use(indexRoutes)
app.use(testRoutes)
app.use(registerLogin)
app.use(appRoutes)

app.listen(PORT,() =>{
    console.log(`app listening on ${PORT}`)
    connectDB()
})

