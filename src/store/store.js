import { createStore } from 'vuex';
import axios from 'axios';
import moment from 'moment';

export default createStore({

    state: {

        currentDate: new moment(),
        currentHours: null,
        currentMinutes: null,
        weatherDescription: '',
        temperature: '',
        iconCode: '',
        sunsetHours: null,
        sunsetMinute: null,
        isDayTime: null,
        isNightTime: null,

    },

    mutations: {

        defineCurrentHours(state) {
            state.currentHours = state.currentDate.format('HH');
        },

        defineCurrentMinutes(state) {
            state.currentMinutes = state.currentDate.format('mm');
        },
        
        defineWeatherDescription(state, response) {
            state.weatherDescription = response;
        },

        defineTemperature(state, response) {
            state.temperature = response;
        },

        defineIconCode(state, response) {
            state.iconCode = response;
        },

        defineSunsetHours(state, milliseconds) {
            let sunsetTime = new Date(1000*milliseconds);
            state.sunsetHours = sunsetTime.getHours();
        },

        defineSunsetMinutes(state, milliseconds) {
            let sunsetTime = new Date(1000*milliseconds);
            state.sunsetMinutes = sunsetTime.getMinutes();
        },

        defineIsDayTime(state) {

            if (state.currentHours < state.sunsetHours) {
      
                state.isDayTime = true;
                state.isNightTime = false;

      
            } else if (state.currentHours == state.sunsetHours) {
      
              if (state.currentMinutes < state.sunsetMinutes) {
      
                state.isDayTime = true;
                state.isNightTime = false;

      
              } else {
      
                state.isDayTime = false;
                state.isNightTime = true;
      
              }
      
            } else {
      
                state.isDayTime = false;
                state.isNightTime = true;
      
            }
      
        },

    },

    actions: {

        getWeather({ commit }, city) {

            return new Promise((resolve, reject) => {
               
               axios("http://api.openweathermap.org/data/2.5/weather?q="+ city.toString() + "&units=metric&appid=59047e5b5fb99d3b3a17ffa14fe1730d")
               .then(response => {
    
                    commit('defineWeatherDescription', response.data.weather[0].description);
                    commit('defineTemperature', Math.floor(response.data.main.temp));
                    commit('defineIconCode', response.data.weather[0].icon);
                    commit('defineCurrentHours');
                    commit('defineCurrentMinutes');
                    commit('defineSunsetHours', response.data.sys.sunset);
                    commit('defineSunsetMinutes', response.data.sys.sunset);
                    commit('defineIsDayTime');
    
                    resolve(response); 
    
               })
                .catch(error => {

                    alert(error + ' [Check your network connection or refresh the page later.]');

                    reject(error);
    
                });

            })

        }        

    },

    getters: {

        getDate(state) {
            return state.currentDate.format('ddd MMMM Do YYYY');
        }

    }

})