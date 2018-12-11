import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	count:44
	
}
const mutations={
	jia(state){
		state.count ++
		console.log(state.count)
	},
	jian(state){
		state.count --
		console.log(state.count)
	}
	
}
const getters={
	count:function(state){
		return state.count+=1
	}
}
const actions={
	jiaplus(context){
		context.commit('jia');
		setTimeout(()=>{
			context.commit('jia');
		},3000)
		console.log('我先被执行了')
	},
	jianplus({commit}){
		commit('jian')
	}
}

// s注意大小写，这里的Store中的S需要大写
// 否则会报错‘ __WEBPACK_IMPORTED_MODULE_1_vuex__.a.store is not a constructor’
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})


