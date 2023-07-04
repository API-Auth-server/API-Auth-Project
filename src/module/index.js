const { Sequelize, DataTypes } = require("sequelize");
const Collection = require("../collection/collection");
require('dotenv').config()


const postgres_url = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DB_URL;

const dataBase = new Sequelize(postgres_url , {} )


module.exports ={
     dataBase ,
     DataTypes
}