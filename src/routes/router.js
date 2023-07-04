const express = require('express');
const testCollection = require('../module/test.moudel');
const route = express.Router();


route.get('/test', async(req, res)=>{
    const getAll = await testCollection.read()
    res.status(200).json({
        message:"test page",
        read : getAll
    });
})
route.post('/test', async(req, res)=>{
    const getAll = await testCollection.create({username: req.body.username})
    res.status(200).json({
        message:"test page",
        read : getAll
    });
})








module.exports={
    route
}