// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import 'lib-flexible';
import 'src/assets/css/rest.css'
import 'src/assets/css/md-common.css'
import 'src/assets/css/1px.less'

// import imgPlugis from 'src/pugins/img_src_plugin';
// Vue.use(imgPlugis)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
