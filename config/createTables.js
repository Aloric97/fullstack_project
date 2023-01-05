const user = require('../models/user')
const rol = require('../models/rol')

const {createTable}= require('./database')
const {createRoles} = require('./defaultRoles')

//create all tables defined in the models



createTable().then(
   createRoles()
)