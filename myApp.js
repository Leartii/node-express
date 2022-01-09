var express = require('express');
var path = require("path");
require('dotenv').config();
var app = express();
console.log("process.env : "+process.env.MESSAGE_STYLE);
console.log("test : "+process.env);
/*app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening");
})*/
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



































 module.exports = app;
