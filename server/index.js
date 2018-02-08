const express=require('express')
const app=express()

app.get('/upload',(req,res)=>{
    res.send('uploaded!!')
})

const server=app.listen(8888,()=>{
    const host=server.address().address
    const port=server.address().port

    console.log(`the server is listening on ${host}:${port}`)
})