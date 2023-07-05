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


describe('moveis test' , () =>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmFoIiwicGFzc3dvcmQiOiIkMmIkMDUkYUQ4LjlDaU5jMC54ZS5Kdk4vL3E5T05DV0pHOHF4aEhxUmNoWFQ1ZjJneldrOHJyUzY4S0siLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODg1NDYwMDZ9.qSWmUhhI0ueZ0NCzfcfV_kgrS8FIk0M3lmlahm-vioA'

    it('get all movies' ,async () =>{

         const res = await muckReq.get('/movies').set(`Authorization`,`Basic ${token}`)
         expect(res.body.message).toBe('Welcome to Movies page ');

    })
    it('get one movies' ,async () =>{

        const res = await muckReq.get('/movies/:id').set(`Authorization`,`Basic ${token}`)
        expect(res.body.message).toBe('Welcome to Movies page');

   })

    it('post movie' ,async () =>{
      
         const res = await muckReq.post('/movies').set(`Authorization`,`Basic ${token}`).send({
            name: 'life',
              type : 'Drama',
              duration:12,
              url:'bhdbfhbjhdbkakfka',
              release_date:2020

         })
         expect(res.body.message).toBe('Movies created successfully');
    })

   it('update movies' ,async () =>{
    const res = await muckReq.put('/movies/:id').set(`Authorization`,`Basic ${token}`).send({
              name: 'life2',
              type : 'Drama2',
              duration:121212,
              url:'bhdbfdhbjhdbkakfka',
              release_date:2023
    })
    expect(res.body.message).toBe('Movies updated successfully');
})

it('delete tvShow' ,async () =>{
    const res = await muckReq.delete('/movies/:id').set(`Authorization`,`Basic ${token}`)
    expect(res.body.message).toBe('Movies deleted successfully');
})
    
})