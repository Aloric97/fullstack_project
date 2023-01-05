const routes=require('express').Router()

//importing middlewares
const isCommon= require('../middlewares/isCommon')
const verifyToken=require('../middlewares/verifyToken')


routes.get('/',verifyToken,isCommon,(req, res) => {

    res.send("welcome to the page index")
})


module.exports=routes