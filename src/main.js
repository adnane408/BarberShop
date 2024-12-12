import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './style.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  router, // Intégrer le routeur à l'instance Vue
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');
