import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/components/routes/home';
import App from '@/starter/App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export const router = new VueRouter({
    mode: 'history',
    routes
});

export const app = new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
