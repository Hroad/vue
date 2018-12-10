// 引入vue
import Vue from 'vue'
// 引入vue-router模块
import vueRouter from 'vue-router'
// 创建路由
Vue.use(vueRouter)
// 父组件
const home={template:'<div>这是home的内容</div>'}
const job={template:'<div>这是job的内容</div>'}
const contact={template:'<div>这是contact的内容</div>'}
// 子组件
const company={template:'<div>{{ $route.name }} 这是company的内容 {{ $route.params.id }}</div>'}
const about={template:'<div>{{ $route.name }} 这是about的内容 {{ $route.params.id }}</div>'}
// 子组件模板块
const gsjj ={
	template:`
		<div class="gsjj">
			<h2>子组件</h2>
			<router-view class="aaa"></router-view>
		</div>
	`
}
// 路由配置
const router=new vueRouter({
	mode:'history',
	routes:[
		{path:'/home',component:gsjj,
			children:[
				{path:'/',name:'home123',component:home},
				{path:'company',name:'company123',component:company},
				{path:'about',name:'about123',component:about},
			]
		},
			
		{path:'/job',name:'job123',component:job},
		{path:'/contact',name:'cantact123',component:contact},
	]
})
// 挂载路由实例
new Vue({
	router,
	template:`
		<div class="nav">
			<h1>导航</h1>
			<p>{{ $route.name }}</p>
			<ul>
				<li><router-link to='/home'>home</router-link></li>
					<ul>
						<li><router-link :to='{name:"company123",params:{id:"123"}}'>company</router-link></li>
						<li><router-link :to='{name:"about123",params:{id:"321"}}'>about</router-link></li>
					</ul>
				<li><router-link to='/job'>job</router-link></li>
				<li><router-link to='/contact'>contact</router-link></li>
			</ul>
			<router-view class="aaa"></router-view>
		</div>
	`
}).$mount('#app')


