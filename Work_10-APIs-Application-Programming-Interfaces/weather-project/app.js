const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  const cityName = req.body.cityName;
  const apiKey = "5cc5e5199e64ef19e897c14e7e1c3aac";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response) {

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const skyInfo = JSON.parse(data).weather[0].description;
      const icon = JSON.parse(data).weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<html><meta charset='UTF-8'><link rel='stylesheet' href='/css/styles.css'><div class='center resDiv'>");
      res.write("<h2>The Weather is currently " + skyInfo + ".</h2>");
      res.write("<h1>The Temperatue in " + cityName + " is " + temp + " degrees Celcius.</h1>");
      res.write("<img src=" + iconURL + "></div><html>");
      res.send();

      // All HTML Document elements that comes with Emmet:
      // res.write("<!DOCTYPE html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'>
      // res.write("<link rel='stylesheet' href='/css/styles.css'><title>Weather App</title></head><body>");
      // res.write("<div class='center'><p>The Weather is currently " + skyInfo + "</p>")");
      // res.write("<h1>The Temperatue in " + cityName + " is " + temp + " degrees Celcius.</h1>");
      // res.write("<img src=" + iconURL + "></div><html>");
      // res.send();
    });
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000 - umttran");
});
