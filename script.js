//storing .weather, .temperature elements & #Icon
var weatherReport = document.querySelector(".weather");
var temperatureReport = document.querySelector(".temperature");
var climateIcon = document.querySelector("#icon");

//calling API
fetch('http://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=59047e5b5fb99d3b3a17ffa14fe1730d')

    .then(response => response.json()) //creating climate object

    .then(function(climate) {

        //showing weather description
        weatherReport.innerHTML = climate.weather[0].description;

        //showing temperature in Celsius
        temperatureReport.innerHTML = Math.floor(climate.main.temp) + "&#176;c";
    });
