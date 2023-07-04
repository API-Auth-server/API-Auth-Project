const { dataBase, DataTypes } = require(".");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = dataBase.define("user_project" , {
     username : {
          type : DataTypes.STRING,
          allowNull : false
     },
     password : {
          type : DataTypes.STRING,
          allowNull : false
     },
     token :{
          type : DataTypes.VIRTUAL,
          get(){
               return jwt.sign({username : this.username , password : this.password , role : this.role} , process.env.SECRET)
          }
     },
     role : {
          type : DataTypes.ENUM("user", "writer" , "editor" , "admin"),
          defaultValue : 'user'
     },
     capabilities:{
          type : DataTypes.VIRTUAL,
          get() {
               const acl = {
                    user:['read'],
                    writer:['read', 'create'],
                    editor:['read', 'create' , 'update'],
                    admin:['read', 'create' , 'update', 'delete']
               }
               return acl[this.role]
          }
     }

})


User.checkUser = async (username, pass) =>{
     const user = await User.findOne({where :{username}})
     const decodePass = await bcrypt.compare(pass ,user.password )
     if(decodePass){
          return user
     }else{
          throw new Error('checkUser from user.model')
     }
}



User.CheckTokenFN = async (token) =>{
     const getToken = jwt.verify(token , process.env.SECRET)
     const getUser = await User.findOne({where : {username : getToken.username}})
     if(getUser.username){
          return getUser
     }else{
          throw new Error (" checkToken error")
     }
}
module.exports = User