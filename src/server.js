const express = require('express')
const app = express()
const cors = require('cors')
const { route } = require('./routes/router')
const { authRoute } = require('./routes/auth')
const moviesRoute = require('./routes/movies')
const tvShowsRoute = require('./routes/TVshows')
const { seriesRoute } = require('./routes/series')
const { TV_channelRoute } = require('./routes/TV-channel')
const { seriesRoute_V2 } = require('./routes_V2/series_v2')
const { TV_channelRoute_v2 } = require('./routes_V2/TV-channel_v2')
const moviesRoute_v2 = require('./routes_V2/movies_v2')
const tvShowsRoute_v2 = require('./routes_V2/TVshows_v2')

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
app.use(seriesRoute)
app.use(TV_channelRoute)
app.use(seriesRoute_V2)
app.use(TV_channelRoute_v2)
app.use(moviesRoute_v2)
app.use(tvShowsRoute_v2)

function start(){
     app.listen(4001 , () =>{
          console.log('up and runung on port 4001');
     })
} 

module.exports = {
     start,
     app
}

