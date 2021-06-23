<template>
  <div class="info">

    <div class="tehran">Tehran</div>

    <div class="today">{{ dateOfToday }}</div>

  </div>
</template>

<script>
export default {

  name: 'info',

  props: {

    date: {
        type: Array,
        required: true
    }

  },

  computed: {

    dateOfToday() {
        return this.date.slice(0,4).join(" ");
    }

  }
  
}
</script>

<style scoped>
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.today {
    font-size: 1.75rem;
}

@media (min-width: 481px) and (max-width: 767px) {
    .today {
        font-size: 1.25rem;
    }
}
</style>
