import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const header = {template:'<div>这是header的内容</div>'}
const content = {template:'<div>这是content的内容</div>'}
const footer = {template:'<div>这是footer的内容</div>'}

const router = new vueRouter({
	mode:'history',
	routes:[
		{path:'/header',component:header},
		{path:'/content',component:content},
		{path:'/footer',component:footer},
		]
})

new Vue({
	router,
	template:`
		<div class="nav">
			<h1>导航</h1>
			<ul>
				<li><router-link to='/header'>header</router-link></li>
				<li><router-link to='/content'>content</router-link></li>
				<li><router-link to='/footer'>footer</router-link></li>
			</ul>
			<router-view class="sss"></router-view>
		</div>
	`
	
}).$mount('#app')

