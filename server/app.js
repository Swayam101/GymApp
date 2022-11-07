const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.json())
app.use(cors())



app.use("/",(req,res)=>{
    res.json({message:"Brother Lets Do It!"})
})

app.listen(5500,()=>{
    console.log("Server @ 5500");
})