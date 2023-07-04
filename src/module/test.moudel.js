const { dataBase, DataTypes } = require(".");
const Collection = require("../collection/collection");


const test = dataBase.define('test1' , {
     username:{
          type : DataTypes.STRING,
          allowNull : false
     }
})


const testCollection = new Collection(test)


module.exports = testCollection
