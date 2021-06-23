<template>
    <div class="time">

        {{ timeHour + ":" + timeMinutes }}
        
    </div>
</template>

<script>
export default {

    name: 'currentTime',

    props: {

        date: {
            type: Array,
            required: true
        }

    },

    computed: {

        timeHour() {
            return this.date[4].split(":")[0];
        },

        timeMinutes() {
            return this.date[4].split(":")[1];
        }

    }

}
</script>

<style scoped>
.time {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
