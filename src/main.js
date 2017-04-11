// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './directives/keyframe'

Vue.config.productionTip = true;

//smooth scrolling polyfill
require('smoothscroll-polyfill').polyfill(); //fixme: not in use currently

//jquery
window.jQuery = require('jquery');//fixme: not in use?


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});

import enlargeOnResize from './plugins/enlargeonresize';
//Vue.use(enlargeOnResize);
