const express = require('express')
const app = express()
const cors = require('cors')
const { route } = require('./routes/router')
const { authRoute } = require('./routes/auth')
const moviesRoute = require('./routes/movies')
const tvShowsRoute = require('./routes/TVshows')

require('dotenv').config()
app.use(cors())
app.use(express.json())

app.get('/' , (req, res) =>{
     console.log(req.body);
     res.status(201).json({
          message : 'home page '
     })
})


app.use(route)
app.use(authRoute)
app.use(moviesRoute)
app.use(tvShowsRoute)

function start(){
     app.listen(4001 , () =>{
          console.log('up and runung on port 4001');
     })
} 

module.exports = {
     start,
     app
}

