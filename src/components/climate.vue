<template>
    <main>
        
        <div class="icon">

                <img :src="iconList[iconCode]" alt="weather icon">

        </div>

        <div class="report">

            <div class="temperature">{{ temperature  + "&#176;c" }}</div>

            <div class="weather">{{ weatherDescription }}</div>

        </div>

    </main>
</template>

<script>
import { mapState } from 'vuex';

export default {

    name: 'climate',

    data () {

        return {

            iconList: {
                '01d' : require("../assets/sun.png"),
                '01n' : require("../assets/moon.png"),
                '02d' : require("../assets/sun & cloud.png"),
                '02n' : require("../assets/moon & cloud.png"),
                '03d' : require("../assets/clouds.png"),
                '03n' : require("../assets/clouds.png"),
                '04d' : require("../assets/clouds.png"),
                '04n' : require("../assets/clouds.png"),
                '09d' : require("../assets/rain.png"),
                '09n' : require("../assets/rain.png"),
                '10d' : require("../assets/rain.png"),
                '10n' : require("../assets/rain.png"),
                '11d' : require("../assets/lightning.png"),
                '11n' : require("../assets/lightning.png"),
                '13d' : require("../assets/snowy.png"),
                '13n' : require("../assets/snowy.png"),
                '50d' : require("../assets/mist.png")
            }

        }

    },

    computed: {

        ...mapState([
            'weatherDescription',
            'temperature',
            'iconCode'
        ])

    },

}
</script>

<style scoped>
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