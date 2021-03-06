// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);
import RouterManage from './vuex/routes';

const routes=RouterManage.getRoutes();
const router=new VueRouter({
    routes
});
const app= new Vue({  
  router,
  render: h => h(App)
}).$mount('#app')
