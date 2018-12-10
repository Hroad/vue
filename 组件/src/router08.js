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
const company={template:'<div>这是company的内容  {{$route.params.id}}</div>'}
const about={template:'<div>这是about的内容</div>'}
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
				{path:'/',component:home},
				{path:'company',name:'company',component:company},
				{path:'about',component:about},
				{path:'position',redirect:'/job'},
			]
		},
			
		{path:'/job',component:job},
		{path:'/contact',component:contact},
		
		
		
		{path:'/contact',component:contact,alias:'/go'},
		
		{path:'/aaa/:id',component:company},
		{path:'/bbb/:id',redirect:'/aaa/:id'},
		
		{
			path:'/ccc/:id',
			redirect:xxx => {
				const {hash,params,query} = xxx;
				if(params.id=='001'){
					return '/home'
				}
			}
		},
		
	]
})
// 挂载路由实例
new Vue({
	el:'#app',
	router,
	template:`
		<div class="nav">
			<h1>导航</h1>
			<ul>
				<li><router-link to='/home'>home</router-link></li>
					<ul>
						<li><router-link :to='{path:"/home/company",name:"company",params:{id:"123"}}'>company</router-link></li>
						<li><router-link to='/home/about'>about</router-link></li>
						<li><router-link to='/home/position'>position</router-link></li>
					</ul>
				<li><router-link to='/job'>job</router-link></li>
				<li><router-link to='/contact'>contact</router-link></li>
				<li><router-link to='/go'>go</router-link></li>
				
				<li><router-link to='/aaa/123'>aaa</router-link></li>
				<li><router-link to='/bbb/456'>bbb</router-link></li>
				<li><router-link to='/ccc/001'>ccc</router-link></li>
				
			</ul>
			<router-view class="aaa"></router-view>
		</div>
	`
})


