const supertest = require("supertest");
const { app } = require("../src/server");
const { dataBase } = require("../src/module");
const jwt = require("jsonwebtoken");
const User = require("../src/module/user.model");
const muckReq = supertest(app)
require('dotenv').config()
const base64 = require('base-64')
 
beforeAll(async () =>{
    await dataBase.sync()
    await User.create({ username: 'ehab3', password: 'password' , role : 'admin'})
})
afterAll(async () =>{
    await dataBase.drop()
})

describe('tvchannel test' , () =>{
         const base = base64.encode('ehab31:123123') 

     it('Can create a new user', async () => {
     
          const response = await muckReq.post('/signup').send({ username: 'ehab31', password: '123123' , role : 'admin'});
          const userObject = response.body;
          expect(response.status).toBe(201);
          });

     it('login user', async () => {
     
          const response = await muckReq.post('/signin').set(`Authorization`,`Basic ${base}`).send({ username: 'ehab31', password: '123123'});
          const userObject = response.body;
          expect(response.status).toBe(200);
          });
})



describe('tvchannel test' , () =>{
     const token = jwt.sign({ username: 'ehab3', password: 'password' , role : 'admin'} , process.env.SECRET || "ehab" )

     // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWI5MSIsInBhc3N3b3JkIjoiJDJiJDA1JEwzaEhnM3R1eDdjTEtoV2ROVFNURk9RWU9yc0tMTFQ5VlM3MmJZZ1I2d2RVc2x1YTMzODUuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4NTQ5NjU2fQ._eRD-PaJ3eoSfulkY1DQh4CTj_f1hfqcCV72rKx4dQ0'

     // it('Can create a new user', async () => {

     //      const response = await muckReq.post('/signup').send({ username: 'user', password: 'password' , role : 'admin'});
     //      const userObject = response.body;
     //      expect(response.status).toBe(201);
     //      });

     it('tv channel all' ,async () =>{

          const res = await muckReq.get('/TV_channel_v2').set(`Authorization`,`Basic ${token}`)
          // console.log(res, '999999999999999999999999999');
          expect(res.body.message).toBe('getAllTV_channel page');

     })
     it('tv channel get one' ,async () =>{

          const res = await muckReq.get('/TV_channel_v2/1').set(`Authorization`,`Basic ${token}`)

          expect(res.body.message).toBe('getOneTV_channel page');

     })
     it('tv channel post one' ,async () =>{

          const res = await muckReq.post('/TV_channel_v2').set(`Authorization`,`Basic ${token}`).send({
               name: 'mbc',
               type : 'family'
          })
          expect(res.body.message).toBe('addTV_channel page');

     })
     it('tv channel update one' ,async () =>{

          const res = await muckReq.put('/TV_channel_v2/1').set(`Authorization`,`Basic ${token}`).send({
               name: 'mbc4',
               type : 'family'
          })
          expect(res.body.message).toBe('updateTV_channel page');

     })
     it('tv channel delete one' ,async () =>{

          const res = await muckReq.delete('/TV_channel_v2/1').set(`Authorization`,`Basic ${token}`)
          expect(res.statusCode).toBe(204);

     }) 


})


const token = jwt.sign({ username: 'ehab3', password: 'password' , role : 'admin'} , process.env.SECRET || "ehab" )
describe('tvchannel test' , () =>{
     // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWI5MSIsInBhc3N3b3JkIjoiJDJiJDA1JEwzaEhnM3R1eDdjTEtoV2ROVFNURk9RWU9yc0tMTFQ5VlM3MmJZZ1I2d2RVc2x1YTMzODUuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4NTQ5NjU2fQ._eRD-PaJ3eoSfulkY1DQh4CTj_f1hfqcCV72rKx4dQ0'
 
 
 
     it('tv channel all' ,async () =>{
 
          const res = await muckReq.get('/series_v2').set(`Authorization`,`Basic ${token}`)
 
          expect(res.body.message).toBe('getAllSeries page');
 
     })
     it('tv channel get one' ,async () =>{
 
          const res = await muckReq.get('/series_v2/1').set(`Authorization`,`Basic ${token}`)
 
          expect(res.body.message).toBe('getOneSeries page');
 
     })
     it('tv channel post one' ,async () =>{
 
          const res = await muckReq.post('/series_v2').set(`Authorization`,`Basic ${token}`).send({
               name: 'mbc',
               type : 'family'
          })
          expect(res.body.message).toBe('addSeries page');
 
     })
     it('tv channel update one' ,async () =>{
 
          const res = await muckReq.put('/series_v2/1').set(`Authorization`,`Basic ${token}`).send({
               name: 'mbc4',
               type : 'family'
          })
          expect(res.body.message).toBe('updateSeries page');
 
     })
     it('tv channel delete one' ,async () =>{
 
          const res = await muckReq.delete('/series_v2/1').set(`Authorization`,`Basic ${token}`)
          expect(res.statusCode).toBe(204);
 
     })
 
 })

 describe('moveis test' , () =>{
 
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


 describe('tvShows test' , () =>{
 
 
     it('get all tvShows' ,async () =>{
 
          const res = await muckReq.get('/tvShows').set(`Authorization`,`Basic ${token}`)
          expect(res.body.message).toBe('Welcome to tvShows page ');
 
     })
     it('get one tvShows' ,async () =>{
 
         const res = await muckReq.get('/tvShows/:id').set(`Authorization`,`Basic ${token}`)
         expect(res.body.message).toBe('Welcome to tvShows page');
 
    })
     it('post tvShow' ,async () =>{
 
          const res = await muckReq.post('/tvShows').set(`Authorization`,`Basic ${token}`).send({
             name: 'life',
               type : 'Drama'
          })
          expect(res.body.message).toBe('tvShows created successfully');
     })
     it('delete tvShow' ,async () =>{
         const res = await muckReq.delete('/tvShows/:id').set(`Authorization`,`Basic ${token}`)
         expect(res.body.message).toBe('tvShows deleted successfully');
    })
 
    it('update tvShow' ,async () =>{
     const res = await muckReq.put('/tvShows/:id').set(`Authorization`,`Basic ${token}`).send({
        name: 'life1',
          type : 'Drama1'
     })
     expect(res.body.message).toBe('tvShows updated successfully');
 })
})