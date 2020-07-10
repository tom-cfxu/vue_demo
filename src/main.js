import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import echarts from 'echarts'
import VueSocketIO from 'vue-socket.io'
// import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWechatTitle from 'vue-wechat-title'
import 'babel-polyfill';
Vue.use(VueWechatTitle)
// axios.defaults.baseURL = 'http://localhost:3000';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios;
// Vue.prototype.HOST = '/api';
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'bPwPDeEBO12Ry9me2FMqmqvHPjmrv1z1'
});
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://114.116.51.4:3000',  //
}))
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title
  if (to.meta.requireAuth) {
    // let token = Cookies.get('access_token');
    // let anonymous = Cookies.get('user_name');
    // if (token) { 

    //         next({
    //             path: '/login',
    //             query: {
    //                 redirect: to.fullPath
    //             } 
    //         })

    // }
  }
  next();
})