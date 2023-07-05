const supertest = require("supertest");
const { app } = require("../src/server");
const { dataBase } = require("../src/module");
const jwt = require("jsonwebtoken");
const muckReq = supertest(app)
require('dotenv').config()
const base64  = require('base-64')




// beforeAll(async () =>{
//     await dataBase.sync()
// })
// afterAll(async () =>{
//     await dataBase.drop()
// })


// describe('tvchannel test' , () =>{

     // it('Can create a new user', async () => {
     
     //      const response = await muckReq.post('/signup').send({ username: 'user12', password: 'password' , role : 'admin'});
     //      const userObject = response.body;
     //      expect(response.status).toBe(201);
     //      });

     // it('Can create a new user', async () => {
     
     //      const response = await muckReq.post('/signin').set(`Authorization`,`Basic ${token}`).send({ username: 'user1', password: 'password' , role : 'admin'});
     //      const userObject = response.body;
     //      expect(response.status).toBe(201);
     //      });
// })

