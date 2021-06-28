<template>
    <div class="time">

        {{ getcurrentHours + ":" + getcurrentMinutes }}
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

    name: 'currentTime',

    computed: {

        ...mapGetters([
            'getcurrentHours',
            'getcurrentMinutes'
        ])

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
