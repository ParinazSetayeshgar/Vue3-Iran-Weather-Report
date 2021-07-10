import { createStore } from 'vuex';
import axios from 'axios';
import moment from 'moment';

export default createStore({

    state: {

        currentDate: new moment(),
        weatherDescription: '',
        temperature: '',
        iconCode: '',
        sunsetHours: null,
        sunsetMinute: null,
        
    },

    mutations: {

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

    },

    actions: {

        getWeather({ commit }) {

            return new Promise((resolve, reject) => {
               
               axios("http://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=59047e5b5fb99d3b3a17ffa14fe1730d")
               .then(response => {
    
                    commit('defineWeatherDescription', response.data.weather[0].description);
                    commit('defineTemperature', Math.floor(response.data.main.temp));
                    commit('defineIconCode', response.data.weather[0].icon);
                    commit('defineSunsetHours', response.data.sys.sunset);
                    commit('defineSunsetMinutes', response.data.sys.sunset);
    
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
        },

        getcurrentHours(state) {
            return state.currentDate.format('HH');
        },

        getcurrentMinutes(state) {
            return state.currentDate.format('mm');
        }

    }

})