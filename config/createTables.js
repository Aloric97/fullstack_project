const user = require('../models/user')
const rol = require('../models/rol')
const application = require('../models/app')
const category = require('../models/categoria')

const {createTable}= require('./database')
const {createRoles} = require('./defaultRoles')
const {createCategories}= require('./defaultCategories')

//create all tables defined in the models



createTable().then(()=>
   {
      createRoles()
      createCategories()
   }
)