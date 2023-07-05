const express = require('express');
const tvShowsCollection = require('../module/TVshows.model');
const checkToken = require('../middleware/checkToken');
const checkCapabilities = require('../middleware/checkCapabilities');

const tvShowsRoute_v2 = express.Router();

tvShowsRoute_v2.get('/tvShows_v2', checkToken,async(req, res)=>{
    const getAlltvShows = await tvShowsCollection.read()
    res.status(200).json({
        message:"Welcome to tvShows page ",
        // data : getAlltvShows,
       tvShows: getAlltvShows

    });
});
tvShowsRoute_v2.get('/tvShows_v2/:id', checkToken ,async(req, res)=>{
    const id = req.params.id;
    const getAlltvShows = await tvShowsCollection.read(id)
    res.status(200).json({
        message:"Welcome to tvShows page",
        data : getAlltvShows
    });
});
tvShowsRoute_v2.post('/tvShows_v2',checkToken , checkCapabilities("create"), async(req, res)=>{
    let obj = req.body;
    const alltvShows = await tvShowsCollection.create(obj)
    console.log(alltvShows)

    res.status(201).json({
        message:"tvShows created successfully",
        data1 : alltvShows
    });
});
tvShowsRoute_v2.put('/tvShows_v2/:id',checkToken , checkCapabilities("update"), async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const alltvShows = await tvShowsCollection.update(id, obj)
    res.status(200).json({
        message:"tvShows updated successfully",
        data: alltvShows
    });
});
tvShowsRoute_v2.delete('/tvShows_v2/:id',checkToken , checkCapabilities("delete"), async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const alltvShows = await tvShowsCollection.delete(id, obj)
    res.status(200).json({
        message:"tvShows deleted successfully",
        data : alltvShows
    });
});

module.exports= tvShowsRoute_v2
