//storing .weather & .temperature elements
var weatherReport = document.querySelector(".weather");
var temperatureReport = document.querySelector(".temperature");
//calling API
fetch('http://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=59047e5b5fb99d3b3a17ffa14fe1730d')
    .then(response => response.json()) //creating climate object
    .then(function(climate) {
        //showing weather description
        weatherReport.innerHTML = climate.weather[0].description;
        function kelvinToCelsius() {
            return Math.floor((climate.main.temp) - 273.15);
        }
        //showing temperature in Celsius
        temperatureReport.innerHTML = kelvinToCelsius();
    });
