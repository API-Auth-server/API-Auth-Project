const User = require("../module/user.model")
const base64  = require('base-64')

module.exports = (req , res , next) =>{
     let header = req.headers.authorization.split(" ").pop()
     if(header){
          const [username , password] = base64.decode(header).split(":")
          User.checkUser(username , password).then(data =>{
               req.User = data
               next()
          })
     }else{
          next('no header')
     }

}