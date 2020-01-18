import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes/home';
import App from './starter/App.vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.rootUrl = window.baseUrl; 
Vue.prototype.$axios = axios;


export const router = new VueRouter({
    mode: 'history',
    routes
});

export const app = new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
