const express = require('express');
const authRoute = express.Router();
const bcrypt = require('bcrypt');
const User = require('../module/user.model');
const checkUser = require('../middleware/checkUser');
const checkToken = require('../middleware/checkToken');
const checkCapabilities = require('../middleware/checkCapabilities');

authRoute.post('/signup',async (req , res) =>{
     const {username, password} = req.body
     const bcryptPass = await bcrypt.hash(password , 5)

     const signup = await User.create({username :username , password: bcryptPass})
     res.status(201).json({
         message:"signup page",
         signup : signup
     });
})
 
authRoute.post("/signin" , checkUser , (req , res) =>{
     res.status(200).json({
          message : 'welcome',
          user : req.User
     })
})

authRoute.get('/order' ,checkToken , checkCapabilities("read"), (req, res) =>{
     if(req.user){
          res.status(200).json({
               message : ' have access'
          })
     }else{
          res.status(200).json({
               message : ' dont have access'
          })
     }
})


module.exports={
     authRoute
 }