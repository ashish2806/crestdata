import loginModule from './store';
import Vuex from 'vuex';
import Vue from 'vue';
window.Vuw = require('vue');
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    loginModule,

  },
});
