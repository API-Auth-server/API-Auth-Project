const express = require('express')
const app = express()
const cors = require('cors')
const { route } = require('./routes/router')
require('dotenv').config()
app.use(cors())

app.get('/' , (req, res) =>{
     res.status(200).json({
          message : 'home page '
     })
})
app.use(route)

function start(){
     app.listen(4001 , () =>{
          console.log('up and runung on port 4001');
     })
} 

module.exports = {
     start,
     app
}

