const express = require('express');
const moviesCollection = require('../module/movies.model');
const moviesRoute_v2 = express.Router();
const checkToken = require('../middleware/checkToken');
const checkCapabilities = require('../middleware/checkCapabilities');

moviesRoute_v2.get('/movies_v2',checkToken, async(req, res)=>{
    const getAllMovies = await moviesCollection.read()
    res.status(200).json({
        message:"Welcome to Movies page ",
        // data : getAllMovies,
       movies: getAllMovies

    });
});
moviesRoute_v2.get('/movies_v2/:id',checkToken, async(req, res)=>{
    const id = req.params.id;
    const getAllMovies = await moviesCollection.read(id)
    res.status(200).json({
        message:"Welcome to Movies page",
        data : getAllMovies
    });
});
moviesRoute_v2.post('/movies_v2',checkToken , checkCapabilities("create"), async(req, res)=>{
    let obj = req.body;
    const allMovies = await moviesCollection.create(obj)
    console.log(allMovies)

    res.status(201).json({
        message:"Movies created successfully",
        data1 : allMovies
    });
});

moviesRoute_v2.put('/movies_v2/:id',checkToken , checkCapabilities("update"), async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const allMovies = await moviesCollection.update(id, obj)
    res.status(200).json({
        message:"Movies updated successfully",
        data: allMovies
    });
})
moviesRoute_v2.delete('/movies_v2/:id',checkToken , checkCapabilities("delete"), async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const allMovies = await moviesCollection.delete(id, obj)
    res.status(200).json({
        message:"Movies deleted successfully",
        data : allMovies
    });
})

module.exports= moviesRoute_v2
