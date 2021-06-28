import { createStore } from 'vuex';

export default createStore({

    state: {

        currentDate: new Date(),
        sunsetHours: null,
        sunsetMinute: null,
        
    },

    mutations: {

        defineSunsetHours(state, milliseconds) {
            let sunsetTime = new Date(milliseconds);
            state.sunsetHours = sunsetTime.getHours() ;
        },

        defineSunsetMinutes(state, milliseconds) {
            let sunsetTime = new Date(milliseconds);
            state.sunsetMinute = sunsetTime.getMinutes();
        }

    },

    getters: {

        getDate(state) {
            return state.currentDate.toString()
                                    .split(' ')
                                    .slice(0,4)
                                    .join(' ');
        },

        getcurrentHours(state) {
            return state.currentDate.toString()
                                    .split(' ')[4]
                                    .split(":")[0];
        },

        getcurrentMinutes(state) {
            return state.currentDate.toString()
                                    .split(' ')[4]
                                    .split(":")[1];
        }

    }

})