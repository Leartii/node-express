var express = require('express');
var path = require("path");
var app = express();
console.log("Hello World");
console.log("test");
/*app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening");
})*/
app.use('/public',express.static(path.join(__dirname,"/public")));
app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/views/index.html");
})
app.get('/json', (req,res)=> {
    res.json({"message":"Hello json"});
})



































 module.exports = app;
