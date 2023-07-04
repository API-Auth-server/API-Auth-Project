const User = require("../module/user.model")


module.exports = (req , res , next) =>{
     const header = req.headers.authorization.split(' ').pop()
     if(header){
          User.CheckTokenFN(header).then(data =>{
               req.user = data
               next()
          }).catch(err => next())
     }
}