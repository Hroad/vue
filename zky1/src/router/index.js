import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
	// mode:'history',
  routes: [
    {
      path: '/',
	  // name:'home',
      component: resolve => require(['@/components/home'],resolve),
	  children:[
		  {
			  path: '/',
			  name:'com',
			  component: resolve => require(['@/components/public'],resolve),
		  },
		  {
			  path: '/jc',
			  name:'jc',
			  component: resolve => require(['@/components/jc'],resolve),
		  },
		  {
			  path: '/job',
			  name:'job',
			  component: resolve => require(['@/components/job'],resolve),
		  },
		],
    }],
})
