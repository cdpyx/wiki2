// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import './assets/style/reset.css'
import './assets/style/font.css'
import skyfieldRouter from './router/index.js'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...skyfieldRouter, //引入的路由是数组 展开数组
    ]
})

const app = new Vue({router})
app.$mount('#app')


