<template>
    <main>
        
        <div class="icon">

                <img :src="iconList[iconCode]" alt="weather icon">

        </div>

        <div class="report">

            <div class="temperature">{{ temperature }}</div>

            <div class="weather">{{ weatherDescription }}</div>

        </div>

    </main>
</template>

<script>
export default {

    name: 'climate',

    data () {

        return {

            APIResponse: null,
            
            iconList: {
                '01d' : "../assets/sun.png",
                '01n' : "../assets/moon.png",
                '02d' : "../assets/sun & cloud.png",
                '02n' : "../assets/moon & cloud.png",
                '03d' : "../assets/clouds.png",
                '03n' : "../assets/clouds.png",
                '04d' : "../assets/clouds.png",
                '04n' : "../assets/clouds.png",
                '09d' : "../assets/rain.png",
                '09n' : "../assets/rain.png",
                '10d' : "../assets/rain.png",
                '10n' : "../assets/rain.png",
                '11d' : "../assets/lightning.png",
                '11n' : "../assets/lightning.png",
                '13d' : "../assets/snowy.png",
                '13n' : "../assets/snowy.png",
                '50d' : "../assets/mist.png"
            }

        }

    },

    methods: {

        fetchData(url) {
            fetch(url).then((response) => this.APIResponse = response.data)
        },

    },

    mounted () {

        this.fetchData('http://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=59047e5b5fb99d3b3a17ffa14fe1730d')

    },

    computed: {

        weatherDescription() {
            return this.APIResponse.weather[0].description;
        },

        iconCode() {
            return this.APIResponse.weather[0].icon;
        },

        temperature() {
            return  Math.floor(this.APIResponse.main.temp) + "&#176;c";
        }

    },


}
</script>

<style scoped>
.day {
    background-image: url('../assets/day.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

.day-mobile {
    background-image: url('../assets/day_mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

.night {
    background-image: url('../assets/night.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

.night-mobile {
    background-image: url('../assets/night_mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
   }

img {
    height: 15em;
    width: auto;
}

.report {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 30px;

}
.temperature {
    font-size:5rem;
}

.weather {
    font-size: 3rem;
}

@media (min-width: 481px) and (max-width: 767px) {
    .temperature {
        font-size:4rem;
    }

    .weather {
        font-size: 2rem;
    }
}
</style>