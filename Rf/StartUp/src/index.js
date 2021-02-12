import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies'

import { store } from './store';
import { router } from './router';
import App from './app/App';

Vue.use(
  VeeValidate,
  VueAxios, 
  axios,
  VueCookies
);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});