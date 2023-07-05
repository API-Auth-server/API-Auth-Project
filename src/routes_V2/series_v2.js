const express = require('express');
const seriesCollection = require('../module/series.model');
const checkToken = require('../middleware/checkToken');
const checkCapabilities = require('../middleware/checkCapabilities');
const seriesRoute_V2 = express.Router();



seriesRoute_V2.get('/series_v2',checkToken ,  getAllSeries)
seriesRoute_V2.get('/series_v2/:id',checkToken , getOneSeries)
seriesRoute_V2.post('/series_v2',checkToken , checkCapabilities("create"),addSeries)
seriesRoute_V2.put('/series_v2/:id',checkToken , checkCapabilities("update"),updateSeries)
seriesRoute_V2.delete('/series_v2/:id',checkToken , checkCapabilities("delete"), deleteSeries)


async function getAllSeries (req, res){
     const getAll = await seriesCollection.read()
     res.status(200).json({
         message:"getAllSeries page",
         read : getAll
     })
 }
async function getOneSeries (req, res){
     const id = req.params.id
     const getAll = await seriesCollection.read(id)
     res.status(200).json({
         message:"getOneSeries page",
         read : getAll
     })
 }
async function addSeries (req, res){
     const obj = req.body
     const getAll = await seriesCollection.create(obj)
     res.status(201).json({
         message:"addSeries page",
         read : getAll
     })
 }
async function updateSeries (req, res){
     const id = req.params.id
     const obj = req.body
     const getAll = await seriesCollection.update(id,obj)
     res.status(202).json({
         message:"updateSeries page",
         read : getAll
     })
 }
async function deleteSeries (req, res){
     const id = req.params.id
     const getAll = await seriesCollection.read(id)
     res.status(204).json({
         message:"deleteSeries page",
     })
 }





// seriesRoute.get('/test', async(req, res)=>{

//     const getAll = await testCollection.read()
//     res.status(200).json({
//         message:"test page",
//         read : getAll
//     });
// })

// seriesRoute.post('/test', async(req, res)=>{
//     const getAll = await testCollection.create({username: req.body.username})
//     res.status(200).json({
//         message:"test page",
//         read : getAll
//     });
// })








module.exports={
    seriesRoute_V2
}