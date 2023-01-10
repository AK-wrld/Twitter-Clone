const express = require('express')
const app = express()
const path=require('path')
const hbs = require('hbs');
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const Twitter = require('./models/Twitter');
app.use(methodOverride('_method'));
const port=80;

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'static')))
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Mongoose specific stuff

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Twitter');
  console.log("we are connected")
}
app.get('/',(req,res)=> {
    res.render('login')
})
app.post('/home',async (req,res)=> {
    const {username}=req.body
    // console.log(req.body)
    const tweets = await Twitter.find({username:username})
    console.log(tweets)
    res.render('home',{
        
        username:username,
        tweets:tweets
    })
})

app.get('/profile',(req,res)=>{
    res.render('profile')
})
app.listen(port,()=> {
    console.log(`Server running at port ${port}`);
})
