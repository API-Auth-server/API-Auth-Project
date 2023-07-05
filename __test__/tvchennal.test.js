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


describe('tvchannel test' , () =>{
     // const token = jwt.sign({username : 'ehab90' } , process.env.SECRET || "ehab" )
     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJwYXNzd29yZCI6IiQyYiQwNSREQk9hUmdBVTA4WW1qMi9tYnlNRVplZHZHWVpqcWxBMXZzODRjMG5lWlo4amJTTG5QOTQ1eSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4ODU0NDEyM30.kP0Rphg6OgGexbm_D-2bxxleLkUT2E1kjcXWRyUkaQc'

  

     it('tv channel all' ,async () =>{

          const res = await muckReq.get('/TV_channel_v2').set(`Authorization`,`Basic ${token}`)

          // console.log(res.body.message,  '77777777777777777');
          expect(res.body.message).toBe('getAllTV_channel page');

     })

     it('tv channel post one' ,async () =>{

          const res = await muckReq.post('/TV_channel_v2').set(`Authorization`,`Basic ${token}`).send({
               name: 'mbc',
               type : 'family'
          })
          expect(res.body.message).toBe('addTV_channel page');

     })

})
