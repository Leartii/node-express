var express = require('express');
var app = express();
console.log("Hello World");
console.log("test");
/*app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening");
})*/
app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/views/index.html");
})




































 module.exports = app;
