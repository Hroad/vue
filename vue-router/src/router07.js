// 引入vue
import Vue from 'vue'

// 引入vue-router模块
import vueRouter from 'vue-router'

// 创建路由
Vue.use(vueRouter)

const home={template:'<div>这是home的内容</div>'}
const about2={template:'<div>这是about2的内容</div>'}
const about={
	template:`
		<div>
			<h2>about</h2>
			<router-view></router-view>
		</div>
	`
}

const user={
	template:`
		<div>
			{{ $route.params.username }} - 
			{{ $route.query.aaa }}
		</div>
	`
}


const router = new vueRouter({
	mode:'history',
	routes:[
		{path:'/home',name:'home',component:home},
		{path:'/about',component:about,
			children:[
				{path:'/'},
				{path:':username',name:'user',component:user}
			]
		}
		
	]
})


new Vue({
	el:'#app',
	router,
	template:`
		<div class="nav">
			<ul>
				<li><router-link to='/home'>/home</router-link></li>
				<li><router-link to='/about'>/about</router-link></li>
				<ol>
					<li><router-link :to="{path:'/about/wos',query:{aaa:'bbb'}}">wos</router-link></li>
					<li><router-link to="about1" append>about1</router-link></li>
					<li><router-link to="about2" exact>about2</router-link></li>
					
				</ol>
			</ul>
			<router-view></router-view>
		</div>
	`
})