
const express = require("express");
const app = express();

app.get("/", function(req,res){
  res.send("<h1>Helloo World</h1>");
});

app.get("/Contact", function(req, res){
    res.send("<h3>Contact me: umutturan107@gmail.com</h3>");
});

app.get("/about", function(req, res){
    res.send("<h2>Hello there ! I'm Umut :)</h2>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
