const {dataBase, DataTypes} = require(".");
const Collection = require("../collection/collection");

const movies = dataBase.define('movie3' , {
    name:{
         type : DataTypes.STRING,
         allowNull : false
    },
    type:{
        type : DataTypes.STRING,
   },
   duration:{
    type : DataTypes.INTEGER,
},
url:{
    type : DataTypes.STRING,
},
release_date:{
    type : DataTypes.INTEGER,
}



});
const moviesCollection = new Collection(movies);

module.exports = moviesCollection;
