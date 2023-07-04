const express = require('express');
const TV_channel_Collection = require('../module/TV-channel.model');
const TV_channelRoute = express.Router();

TV_channelRoute.get('/TV_channel' , getAllTV_channel)
TV_channelRoute.post('/TV_channel', addTV_channel)
TV_channelRoute.get('/TV_channel/:id', getOneTV_channel)
TV_channelRoute.put('/TV_channel/:id', updateTV_channel)
TV_channelRoute.delete('/TV_channel/:id', deleteTV_channel)


async function getAllTV_channel (req, res){
     const getAll = await TV_channel_Collection.read()
     res.status(200).json({
         message:"getAllTV_channel page",
         read : getAll
     })
 }
async function getOneTV_channel (req, res){
     const id = req.params.id
     const getAll = await TV_channel_Collection.read(id)
     res.status(200).json({
         message:"getOneTV_channel page",
         read : getAll
     })
 }
async function addTV_channel (req, res){
     const obj = req.body
     const getAll = await TV_channel_Collection.create(obj)
     res.status(201).json({
         message:"addTV_channel page",
         read : getAll
     })
 }
async function updateTV_channel (req, res){
     const id = req.params.id
     const obj = req.body
     const getAll = await TV_channel_Collection.update(id,obj)
     res.status(202).json({
         message:"updateTV_channel page",
         read : getAll
     })
 }
async function deleteTV_channel (req, res){
     const id = req.params.id
     const getAll = await TV_channel_Collection.read(id)
     res.status(204).json({
         message:"deleteTV_channel page",
     })
 }





// TV_channelRoute.get('/test', async(req, res)=>{

//     const getAll = await testCollection.read()
//     res.status(200).json({
//         message:"test page",
//         read : getAll
//     });
// })

// TV_channelRoute.post('/test', async(req, res)=>{
//     const getAll = await testCollection.create({username: req.body.username})
//     res.status(200).json({
//         message:"test page",
//         read : getAll
//     });
// })








module.exports={
    TV_channelRoute
}