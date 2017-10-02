// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Manage from './components/Manage.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;   //阻止vue在启动时生成生产提示

/* eslint-disable no-new */

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/manage',
      component:Manage
    }
  ]
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
