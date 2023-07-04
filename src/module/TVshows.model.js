const {dataBase, DataTypes} = require(".");
const Collection = require("../collection/collection");

const tvShows = dataBase.define('tvShows1' , {
    name:{
         type : DataTypes.STRING,
         allowNull : false
    },
    type:{
        type : DataTypes.STRING,
        
   }
});
const tvShowsCollection = new Collection(tvShows);

module.exports = tvShowsCollection;
