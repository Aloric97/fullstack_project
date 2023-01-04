const routes=require('express').Router()

routes.get('/', (req, res) => {

    res.send("welcome to the page index")
})


module.exports=routes