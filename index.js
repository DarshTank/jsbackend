require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/twitter',(req,res)=>{
    res.send('darshtank05@gmail.com')
})

app.get('/login',(req,res) => {
    res.send('<h1>Hello! You are on the Login Page</h1>')
})

app.get('/move',(req,res)=>{
    res.send("<a href='https://jsbackend-wwyj.onrender.com/login hsdgfdsgf'>Click here To go For Login</a>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example on port ${port}`)
})
