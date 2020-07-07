import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
// import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// axios.defaults.baseURL = 'http://localhost:3000';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios;
// Vue.prototype.HOST = '/api';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'bPwPDeEBO12Ry9me2FMqmqvHPjmrv1z1'
});
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
