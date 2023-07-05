const supertest = require("supertest");
const { app } = require("../src/server");
const { dataBase } = require("../src/module");
const jwt = require("jsonwebtoken");
const User = require("../src/module/user.model");
const muckReq = supertest(app)
require('dotenv').config()

 

// beforeAll(async () =>{
//     await dataBase.sync()
//     await User.create({ username: 'ehab2', password: 'password' , role : 'admin'})
// })

// afterAll(async () =>{
//     await dataBase.drop()
// })


// describe('tvchannel test' , () =>{
//     const token = jwt.sign({ username: 'ehab2', password: 'password' , role : 'admin'} , process.env.SECRET || "ehab" )
//     // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWI5MSIsInBhc3N3b3JkIjoiJDJiJDA1JEwzaEhnM3R1eDdjTEtoV2ROVFNURk9RWU9yc0tMTFQ5VlM3MmJZZ1I2d2RVc2x1YTMzODUuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4NTQ5NjU2fQ._eRD-PaJ3eoSfulkY1DQh4CTj_f1hfqcCV72rKx4dQ0'


//     // it('Can create a new user', async () => {

//     //      const response = await muckReq.post('/signup').send({ username: 'ehab2', password: 'password' , role : 'admin'});
//     //      const userObject = response.body;
//     //      console.log(userObject , '55555555555555555555555555555555');
//     //      expect(response.status).toBe(201);
//     //      });

//     it('tv channel all' ,async () =>{

//          const res = await muckReq.get('/series_v2').set(`Authorization`,`Basic ${token}`)

//          expect(res.body.message).toBe('getAllSeries page');

//     })
//     it('tv channel get one' ,async () =>{

//          const res = await muckReq.get('/series_v2/1').set(`Authorization`,`Basic ${token}`)

//          expect(res.body.message).toBe('getOneSeries page');

//     })
//     it('tv channel post one' ,async () =>{

//          const res = await muckReq.post('/series_v2').set(`Authorization`,`Basic ${token}`).send({
//               name: 'mbc',
//               type : 'family'
//          })
//          expect(res.body.message).toBe('addSeries page');

//     })
//     it('tv channel update one' ,async () =>{

//          const res = await muckReq.put('/series_v2/1').set(`Authorization`,`Basic ${token}`).send({
//               name: 'mbc4',
//               type : 'family'
//          })
//          expect(res.body.message).toBe('updateSeries page');

//     })
//     it('tv channel delete one' ,async () =>{

//          const res = await muckReq.delete('/series_v2/1').set(`Authorization`,`Basic ${token}`)
//          expect(res.statusCode).toBe(204);

//     })


// })