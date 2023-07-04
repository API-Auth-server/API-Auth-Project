const { dataBase, DataTypes } = require(".");
const Collection = require("../collection/collection");


const TV_channel = dataBase.define('TV_channel' , {
     name: {
          type: DataTypes.STRING,
          allowNull : false
     },
     type: {
          type: DataTypes.STRING,
     }
})


const TV_channel_Collection = new Collection(TV_channel)

module.exports = TV_channel_Collection

