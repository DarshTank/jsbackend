require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

const gitData ={
  "login": "DarshTank",
  "id": 157698092,
  "node_id": "U_kgDOCWZILA",
  "avatar_url": "https://avatars.githubusercontent.com/u/157698092?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DarshTank",
  "html_url": "https://github.com/DarshTank",
  "followers_url": "https://api.github.com/users/DarshTank/followers",
  "following_url": "https://api.github.com/users/DarshTank/following{/other_user}",
  "gists_url": "https://api.github.com/users/DarshTank/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DarshTank/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DarshTank/subscriptions",
  "organizations_url": "https://api.github.com/users/DarshTank/orgs",
  "repos_url": "https://api.github.com/users/DarshTank/repos",
  "events_url": "https://api.github.com/users/DarshTank/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DarshTank/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Darsh Tank",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2024-01-25T10:42:21Z",
  "updated_at": "2024-11-08T13:40:10Z"
}

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
    res.send("<a href='https://jsbackend-wwyj.onrender.com/login'>Click here To go For Login</a>")
})

app.get('/gitdata',(req,res)=>{
  res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example on port ${port}`)
})
