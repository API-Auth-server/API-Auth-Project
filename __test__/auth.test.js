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




it('Can create a new user', async () => {

     const response = await muckReq.post('/signup').send({ username: 'user', password: 'password' , role : 'admin'});
     const userObject = response.body;
     expect(response.status).toBe(201);
     });