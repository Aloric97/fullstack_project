const category = require("../models/categoria")
const { Op } = require("sequelize");



const aventuras ={
    nombre:'Aventuras',
}
const drama ={
    nombre:'Drama',
}
const fantasia ={
    nombre:'Fantasía',
}
const accion ={
    nombre:'Acción',
}
const cienciaFiccion ={
    nombre:'Ciencia Ficción.',
}
const suspenso ={
    nombre:'Suspenso',
}
const terror ={
    nombre:'Terror',
}



const createCategories= async ()=>{
    const find= await category.findOne({
        where:{
            [Op.or]:
            [
                {nombre:'terror'},
                {nombre:'drama'}
            ]}
    })
    
    if(!find) {
        const categories = await category.bulkCreate([aventuras,drama,fantasia,accion,cienciaFiccion,suspenso,terror])
        console.log('categories created successfully')
    }else{
        console.error('categories have already been created before')
    }
    
    
}

module.exports={createCategories}