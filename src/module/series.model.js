const { dataBase, DataTypes } = require(".");
const Collection = require("../collection/collection");


const series = dataBase.define('series' , {
     name: {
          type: DataTypes.STRING,
          allowNull : false
     },
     release_date: {
          type: DataTypes.INTEGER,
          
     },
     url: {
          type: DataTypes.STRING,
     },
     type: {
          type: DataTypes.STRING,
     },
     duration: {
          type: DataTypes.STRING,
     }
})


const seriesCollection = new Collection(series)

module.exports = seriesCollection

