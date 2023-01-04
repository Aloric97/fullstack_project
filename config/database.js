//importing libraries from the modules

const dotenv = require('dotenv').config()
const {Sequelize}= require('sequelize')



const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});


const connectDB= async ()=>{
    await database
    .authenticate()
    .then(
        console.log('conection database was established')
    )
    .catch(err=>{
        console.log(`There was mistake in the connection: ${err}`)
    })
}

const createTable= async ()=>{
    await database
    .sync({/*force: true*/})
    .then(
        console.log('table was created succesfully')
    )
    .catch(err=>{
        console.log('There was error to create the tables: ${err}')
    })
}

module.exports={
    database,
    connectDB,
    createTable
}