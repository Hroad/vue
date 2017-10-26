// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入vue模块
import App from './App.vue'
//引入vue组件




/* eslint-disable no-new */
new Vue({
//	创建一个vue的根实例
  el: '#app',
  //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
	render:function(c){
		return c(App);
	}
})
