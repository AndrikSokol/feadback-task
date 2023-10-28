require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express();

const PORT = process.env.PORT;

app.use(cors({
    credentials: true,
    origin: process.env.URL,
}))
app.get("/api/ping",async(req,res)=>{
    res.json({
        status: "success",
        message: "Server is ready"})
})

app.post("/api/registration", async()=>{
    const number = Math.random*2;
    if(number)
        res.status(200)
    else
        res.status(400)
})
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
  })