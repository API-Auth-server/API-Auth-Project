const express = require('express');
const tvShowsCollection = require('../module/TVshows.model');

const tvShowsRoute = express.Router();

tvShowsRoute.get('/tvShows', async(req, res)=>{
    const getAlltvShows = await tvShowsCollection.read()
    res.status(200).json({
        message:"Welcome to tvShows page ",
        // data : getAlltvShows,
       tvShows: getAlltvShows

    });
});
tvShowsRoute.get('/tvShows/:id', async(req, res)=>{
    const id = req.params.id;
    const getAlltvShows = await tvShowsCollection.read(id)
    res.status(200).json({
        message:"Welcome to tvShows page",
        data : getAlltvShows
    });
});
tvShowsRoute.post('/tvShows', async(req, res)=>{
    let obj = req.body;
    const alltvShows = await tvShowsCollection.create(obj)
    console.log(alltvShows)

    res.status(201).json({
        message:"tvShows created successfully",
        data1 : alltvShows
    });
});

tvShowsRoute.put('/tvShows/:id', async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const alltvShows = await tvShowsCollection.update(id, obj)
    res.status(200).json({
        message:"tvShows updated successfully",
        data: alltvShows
    });
})
tvShowsRoute.delete('/tvShows/:id', async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const alltvShows = await tvShowsCollection.delete(id, obj)
    res.status(200).json({
        message:"tvShows deleted successfully",
        data : alltvShows
    });
})

module.exports= tvShowsRoute
