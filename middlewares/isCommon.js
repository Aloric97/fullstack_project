const user =require('../models/user')
const rol =require('../models/rol')


const isCommon = async (req, res, next) => {
    try {
      const roles = await rol.findAll();
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "common") {
          next();
          return;
        }
      }
      return res.status(403).json({ message: "Require common Role!" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
};

module.exports=isCommon