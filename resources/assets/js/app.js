
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate'
import axios from 'axios'
import Vuex from 'vuex'

window.Vue.use(VueRouter);
window.Vue.use(VeeValidate);
window.Vue.use(axios);
window.Vue.use(Vuex);

global.axiosurl = 'http://localhost:8008/'
global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $

import Dashboard from './components/Dashboard.vue';
import Sidebars from './components/Sidebars.vue';
import Costumers from './components/Costumers.vue';

const routes = [
    {
        path: '/',
        components: {
        	default: Dashboard,
        	sidebarsall: Sidebars
        }
    },
    {
    	path: '/Costumers',
    	components: {
        	default: Costumers,
        	sidebarsall: Sidebars
        }
    }
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')