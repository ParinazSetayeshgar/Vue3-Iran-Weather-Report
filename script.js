//storing elements
var today = document.querySelector(".today");
var time = document.querySelector(".time");

var icons = document.querySelectorAll(".icon");
var cloudy = document.querySelector(".cloudy");
var rainy = document.querySelector(".rainy");
var cloudy = document.querySelector(".cloudy");
var cloudySun = document.querySelector(".cloudy-sun");
var cloudyLightning = document.querySelector(".cloudy-lightning");
var cloudyMoon = document.querySelector(".cloudy-moon");
var cloudyRainLightning = document.querySelector(".cloudy-rain-lightning")
var cloudy = document.querySelector(".cloudy");
var sunny = document.querySelector(".sunny");
var clearNight = document.querySelector(".clear-night");
var mist = document.querySelector(".mist");
var snowy = document.querySelector(".snowy");

var weatherReport = document.querySelector(".weather");
var temperatureReport = document.querySelector(".temperature");

//Declaring function for defining background image
function backgroundImg (currentHour, currentMinutes, sunsetHour, sunsetMinutes) {
    let mediaQuery = window.matchMedia('(min-width: 481px) and (max-width: 767px)');
    if (mediaQuery.matches) {
        if (currentHour == sunsetHour) {
            if ( currentMinutes > sunsetMinutes) {
                document.body.className = "night-mobile";
            } else {
                document.body.className = "day-mobile";
            }
        } else if (currentHour > sunsetHour) {
            document.body.className = "night-mobile";
        } else {
            document.body.className = "day-mobile";
        }
    } else {
        if (currentHour == sunsetHour) {
            if ( currentMinutes > sunsetMinutes) {
                document.body.className = "night";
            } else {
                document.body.className = "day";
            }
        } else if (currentHour > sunsetHour) {
            document.body.className = "night";
        } else {
            document.body.className = "day";
        }
    }
}

//calling API
fetch('http://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=59047e5b5fb99d3b3a17ffa14fe1730d')

    .then(response => response.json()) //creating climate object

    .then(function(climate) {
        //making all icons invisible
        icons.forEach((element) => element.style.visibility = "hidden");

        //defining date of today & current time
        let dateOfToday = new Date()
        let dateOfTodayArray = dateOfToday.toString().split(" ");
        for (let i=0 ; i<4 ; i++) {
            today.innerHTML += dateOfTodayArray[i] + " ";
        }
        let timeArray = dateOfTodayArray[4].toString().split(":");
        time.innerHTML = timeArray[0] + ":" + timeArray[1] ;

        //Defining sunset time
        let unixTime = new Date(climate.sys.sunset * 1000);
        let sunsetH = unixTime.getHours();
        let sunsetM = unixTime.getMinutes();

        //background image change
        backgroundImg (timeArray[0], timeArray[1], sunsetH, sunsetM);
        
        //showing weather description
        weatherReport.innerHTML = climate.weather[0].description;

        //showing temperature in Celsius
        temperatureReport.innerHTML = Math.floor(climate.main.temp) + "&#176;c";

        //showing icons
        switch(climate.weather[0].icon) {
            case "01d":
                sunny.style.visibility = "visible";
                break;
            case "01n":
                clearNight.style.visibility = "visible";
                break;
            case "02d":
                cloudySun.style.visibility = "visible";
                break;
            case "02n":
                cloudyMoon.style.visibility = "visible";
                break;
            case "03d":
                cloudy.style.visibility = "visible";
                break;
            case "03n": 
                cloudy.style.visibility = "visible";
                break;
            case "04d":
                cloudy.style.visibility = "visible";
                break;
            case "04n":
                cloudy.style.visibility = "visible";
                break;
            case "09d":
                rainy.style.visibility = "visible";
                break;
            case "09n":
                rainy.style.visibility = "visible";
                break;
            case "10d":
                rainy.style.visibility = "visible";
                break;
            case "10n":
                rainy.style.visibility = "visible" ;
                break;
            case "11d":
                cloudyLightning.style.visibility = "visible";
                break;
            case "11n":
                cloudyLightning.style.visibility = "visible";
                break;
            case "13d":
                snowy.style.visibility = "visible";
                break;
            case "13n": snowy.style.visibility = "visible";
                break;
            case "50d":
                mist.style.visibility = "visible";
                break;
            default:
                mist.style.visibility = "visible";
        }
    });
