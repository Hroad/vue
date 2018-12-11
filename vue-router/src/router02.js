// 引入vue
import Vue from 'vue'
// 引入vue-router模块
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const home={template:'<div>这是home的内容</div>'}
const job={template:'<div>这是job的内容</div>'}
const contact={template:'<div>这是contact的内容</div>'}

const router=new vueRouter({
	mode:'history',
	routes:[
		{path:'/home',component:home},
		{path:'/job',component:job},
		{path:'/contact',component:contact},
	]
})

new Vue({
	router,
	template:`
		<div class="nav">
			<h1>导航</h1>
			<ul>
				<li><router-link to='/home'>home</router-link></li>
				<li><router-link to='/job'>job</router-link></li>
				<li><router-link to='/contact'>contact</router-link></li>
			</ul>
			<router-view class="aaa"></router-view>
		</div>
	`
}).$mount('#app')


