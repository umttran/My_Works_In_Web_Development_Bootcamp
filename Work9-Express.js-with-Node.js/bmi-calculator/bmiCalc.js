const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var weight = req.body.weight;
  var height = req.body.height;
  var bmi = Math.round((weight)/((height/100)*(height/100)));

  res.send("<h1>Your BMI: " + bmi + "</h1>");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000 - umttran");
})
