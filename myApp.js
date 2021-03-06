var express = require('express');
var path = require("path");
const { emitWarning } = require('process');
require('dotenv').config();
const bodyParser = require('body-parser');
var app = express();
console.log("process.env : "+process.env.MESSAGE_STYLE);
console.log("test : "+process.env);
/*app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening");
})*/
/*var logger = function(req,res,next){
    console.log(`${req.method} ${req.path} ${req.ip}`);
    next();
}*/
app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.use('/public',express.static(path.join(__dirname,"/public")));
app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/views/index.html");
})
app.get('/json', (req,res)=> {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message":"Hello json".toUpperCase()});
    }
    else{
        res.json({"message":"Hello json"});
    }
})
app.get('/now',(req,res,next)=>{
    req.time = new Date().toString();
    next();
}, (req,res) => {
    res.json({"time" : req.time})
})

app.get("/:word/echo", (req,res) => {
    const word = req.params.word;
    res.json({"echo" : word});
})
app.use(bodyParser.urlencoded({extended: false}));
app.route("/name").get((req,res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`})
}).post((req,res)=> {
    res.json({"name" : `${req.body.first} ${req.body.last}`});
})

































 module.exports = app;
