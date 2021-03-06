import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const home={
	template:`
		<div>
			<h1>home page</h1>
			<p>this is home page</p>
		</div>
	`
}

const about={
	template:`
		<div>
			<h1>about page</h1>
			<p>this is about page</p>
		</div>
	`
}

const page404={
	template:`
		<div>
			<p>this is error 404 page</p>
		</div>
	`
}


const router = new vueRouter({
	mode:'history',
	routes:[
		{path:'/',component:home},
		{path:'/about',component:about},
		{path:'*',component:page404}
	]
})



new Vue({
	el:'#app',
	data () {
		return{
			aaa:'fade'
		}
	},
	router,
	template:`
		<div id="#demo2">
			<h1>router的transition动画</h1>
			<ul>
				<li><router-link to='/'>home</router-link></li>
				<li><router-link to='/about'>about</router-link></li>
				<li><router-link to='/error'>error</router-link></li>
			</ul>
			
			<transition :name='aaa' mode='out-in'>
				<router-view></router-view>
			</transition>
			
		</div>
	`,
	watch:{
		'$route'(to,from){
			
			if(from.path=='/about'){
				this.aaa='fade1'
			}else{
				this.aaa='fade2'
			}
			
		}
	}
})
