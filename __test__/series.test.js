const supertest = require("supertest");
const { app } = require("../src/server");
const { dataBase } = require("../src/module");
const jwt = require("jsonwebtoken");
const muckReq = supertest(app)
require('dotenv').config()



beforeAll(async () =>{
    await dataBase.sync()
})
afterAll(async () =>{
    await dataBase.drop()
})
