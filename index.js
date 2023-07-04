const { dataBase } = require("./src/module");
const { start } = require("./src/server");


dataBase.sync().then(( ) =>{
     start()
})
.catch(err => console.log('database main index.js' , err))
// {force : true}