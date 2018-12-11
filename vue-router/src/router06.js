// 引入vue
import Vue from 'vue'
// 引入vue-router模块
import vueRouter from 'vue-router'
// 创建路由
Vue.use(vueRouter)

// 路由配置
const router=new vueRouter({
	mode:'history',
	routes:[
		{path:'/'},
		{path:'/params/:aaa/:bbb/:ccc'},
		{path:'/params/:id(\\d+)'}
	]
})

// 挂载路由实例
new Vue({
	el:'#app',
	router,
	template:`
		<div>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/params/111/222/333">/params/111/222/333</router-link></li>
				<li><router-link to="/params/222">/params/222</router-link></li>
			</ul>
			
			<pre><code>
				{{ $route.params.aaa }}
				{{ $route.params.bbb }}
				{{ $route.params.ccc }}
				{{ $route.params.id }}
				{{ JSON.stringify($route,null,2) }}
			</code></pre>
		</div>
	`
})


