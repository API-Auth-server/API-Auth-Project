const express = require('express');
const route = express.Router();


route.get('/test',(req, res)=>{
    res.status(200).json({
        message:"test page"
    });
})
module.exports={
    route
}