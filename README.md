# Tehran-Weather-API

What is it about?
In this project Openweathermap API is called by fetch() method for showing Tehran current weather including climate description & Temperature.

How does it happen?
Openweathermap package has been installed through NPM. API is called by fetch() method & its argument has been determined acoording to Openweathermap API documentation. when the response is returned by then() method, JSON file is converted to a Javascript object by JSON method; therefore desirable info are accessable easily through an object.

About the Layout
Flexbox features are used to code responsive layout. Madia query is also used for more responsivity. 
Background image will be changed after sunset or sunrise. Daytime or night-time determines the change & this is performed by comparing current time (obtained by Date() constructor) & sunset time which is included in API response.
Animated weather icons code in the link below has been used for showing weather icons:
https://codepen.io/WaelYasmina/pen/brgNYK
They appear according to icon code in API response.

What do you need to do for ruuning this project?
After cloning the project from this repository, install Openweathermap package through NPM command in the same directory (Generally necessary packages are listed through dependencies in JSON fle called package-lock) Make sure that Node.js has been installed for using npm commands:
    npm install openweathermap
 Then you can open index.html in your browser for running the project.

