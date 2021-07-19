On this branch:


Openweathermap API is called by fetch() method for showing Tehran current weather including climate description & Temperature.

API is called by fetch() method & its argument has been determined acoording to Openweathermap API documentation. when the response is returned by then() method, JSON file is converted to a Javascript object by JSON method; therefore desirable info are accessable easily through an object.


About the Layout:

Flexbox features are used to code responsive layout. Madia query is also used for more responsivity. 
Background image will be changed after sunset or sunrise. Daytime or night-time determines the change & this is performed by comparing current time (obtained by Date() constructor) & sunset time which is included in API response.


For ruuning this project:

After cloning the project from this repository, open index.html in your browser.

