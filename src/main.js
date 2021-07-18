import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import vueCountryRegionSelect from 'vue3-country-region-select';

const app = createApp(App);
app.use(store);
app.use(vueCountryRegionSelect);
app.mount('#app');





