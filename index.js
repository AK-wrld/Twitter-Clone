const express = require('express')
const app = express()
const path=require('path')
const hbs = require('hbs');
var methodOverride = require('method-override')
app.use(methodOverride('_method'));
const port=80;

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'static')))
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.get('/home',(req,res)=> {
    res.render('home')
})

app.listen(port,()=> {
    console.log(`Server running at port ${port}`);
})
