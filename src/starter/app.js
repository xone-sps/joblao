import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/components/routes/home';
import App from '@/starter/App.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

export const router = new VueRouter({
    mode: 'history',
    routes
});

export const app = new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
