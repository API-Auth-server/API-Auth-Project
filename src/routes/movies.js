const express = require('express');
const moviesCollection = require('../module/movies.model');
const moviesRoute = express.Router();

moviesRoute.get('/movies', async(req, res)=>{
    const getAllMovies = await moviesCollection.read()
    res.status(200).json({
        message:"Welcome to Movies page ",
        // data : getAllMovies,
       movies: getAllMovies

    });
});
moviesRoute.get('/movies/:id', async(req, res)=>{
    const id = req.params.id;
    const getAllMovies = await moviesCollection.read(id)
    res.status(200).json({
        message:"Welcome to Movies page",
        data : getAllMovies
    });
});
moviesRoute.post('/movies', async(req, res)=>{
    let obj = req.body;
    const allMovies = await moviesCollection.create(obj)
    console.log(allMovies)

    res.status(201).json({
        message:"Movies created successfully",
        data1 : allMovies
    });
});

moviesRoute.put('/movies/:id', async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const allMovies = await moviesCollection.update(id, obj)
    res.status(200).json({
        message:"Movies updated successfully",
        data: allMovies
    });
})
moviesRoute.delete('/movies/:id', async(req, res)=>{
    const id = req.params.id;
    const obj = req.body;
    const allMovies = await moviesCollection.delete(id, obj)
    res.status(200).json({
        message:"Movies deleted successfully",
        data : allMovies
    });
})

module.exports= moviesRoute
