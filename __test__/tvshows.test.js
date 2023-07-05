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


describe('tvShows test' , () =>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmFoMTEiLCJwYXNzd29yZCI6IiQyYiQwNSR4WldpZnBrZlpQcktKTGZiSFdEM3N1dGtqZ2dDM0lTdFYwZmVkOHlqVGJDeHFyT2VscVdNNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4ODU1MTUyNX0.MmTrLXU5DNOjm_PnBSIqKaptPYlIRGNdS2ZhLAUvlNE'


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

