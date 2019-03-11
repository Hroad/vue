// 引入vue
import Vue from 'vue'

import store from './store'
// import transition from './transition.vue'
import Vuex from './components/vuex.vue'

// new Vue({
// 	el:'#demo',
// 	render:xx => xx(transition)
// })

new Vue({
	el:'#app',
	store,
	render:app => app(Vuex)
})



