import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, //:routes (es6 sayesinde aynı isimde olanları eşleştiriyor)
  mode: 'history' // url'deki #'i kaldırır. defaultu 'hash(#)' dir.
})

new Vue({
  el: '#app',
  router, //yukarıdaki durum burada da geçerli
  render: h => h(App)
})
