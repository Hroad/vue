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

const router = new vueRouter({
	mode:'history',
	routes:[
		{path:'/',component:home},
		{path:'/about',component:about}
	]
})



new Vue({
	el:'#app',
	router,
	template:`
		<div id="#demo2">
			<h1>router的transition动画</h1>
			<ul>
				<li><router-link to='/'>home</router-link></li>
				<li><router-link to='/about'>about</router-link></li>
			</ul>
			
			<transition name='fade' mode='out-in'>
				<router-view></router-view>
			</transition>
			
		</div>
	`
})
