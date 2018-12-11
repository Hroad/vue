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
const com={template:'<div>这是com的内容</div>'}

// 路由配置
const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/home',components:{
			default:home,
			left:job,
			right:contact
		}},
		{path:'/job',components:{
			default:com,
			left:job,
			right:contact
		}},
		
	]
})
// 挂载路由实例
new Vue({
	el:'#app',
	router,
	template:`
		<div class="nav">
			<h1>导航</h1>
			<p>{{ $route.name }}</p>
			<ul>
				<li><router-link to='/home'>home</router-link></li>
				<li><router-link to='/job'>job</router-link></li>
				
			</ul>
			<router-view class="aaa"></router-view>
			<router-view class="bbb" name="left" style="width: 50%; height: 200px; float: left; background: #004444; color: #fff;"></router-view>
			<router-view class="ccc" name="right" style="width: 50%; height: 200px; float: right; background: #00f444; color: #fff;"></router-view>
		</div>
	`
})


