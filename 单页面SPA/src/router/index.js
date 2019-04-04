import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	// mode:'history',
  routes: [
    {
      path: '/',
			name:'home',
      component: resolve => require(['@/components/home'],resolve),
    },
		{
		  path: '/com',
			name:'com',
		  component: resolve => require(['@/components/public'],resolve),
			children:[
				{
					path: 'about',
					name:'about',
					component: resolve => require(['@/page/about'],resolve),
				},
				{
					path: 'job',
					name:'job',
					component: resolve => require(['@/page/job'],resolve),
				},
				{
					path: 'xc',
					name:'xc',
					component: resolve => require(['@/page/xc'],resolve),
				},
			]
		},
  ],
	linkActiveClass: 'active'
})
