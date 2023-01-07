const { DataTypes} =require('sequelize')

const {database}= require('../config/database')
const category = require('./categoria')

const application = database.define('application',{
    nombre:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            len:[5,30]
        }
    },
    precio:{
        type:DataTypes.DOUBLE,
        validate:{
            isFloat:true,
        }
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            isUrl:true,
        }
    },
    aprobado:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    timestamps: false 
})

//relationships 1 to 1, of user and rol
category.hasMany(application)
application.belongsTo(category)

module.exports=application