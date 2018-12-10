<template>
	<div id="app">
		<h3>Hello Vuex</h3>
		<!-- <p>{{ $store.state.count }} - {{count}}</p> -->
		<p>{{count}}</p>
		<p>
			<button @click="$store.commit('jia')">+</button>
			<button @click="$store.commit('jian')">-</button>
		</p>
		
		<p class="actions">
			<button @click="jiaplus">jiaplus</button>
			<button @click="jianplus">jianplus</button>
		</p>
		
	</div>
</template>

<script>
	import {mapState,mapMutations,mapGetters,mapActions} from 'Vuex' 
	export default {
		name:'app',

// 		computed:{
// 			count(){
// 				return this.$store.state.count+1
// 			}
// 		}

// 		computed:mapState({
// 			count:state=>state.count
// 		})

		computed:{
			...mapState([
				'count'
			]),
			
// 			count() {
// 				return this.$store.getters.count
// 			}

// 			...mapGetters([
// 				"count"
// 			])

		},
		
// 		methods: mapMutations([
// 			'jia',
// 			'jian'
// 		]),

		methods: {
			...mapMutations({
				jia:'jia',
				jian:'jian'
			}),
			...mapActions({
				jiaplus:'jiaplus',
				jianplus:'jianplus'
			})
		},

	}
</script>

<style scoped="scoped">
	
	#app p button{
		width: 50px;
		height: 30px;
		line-height: 30px;
		background:#B5D592;
		cursor: pointer;
		border: 0;
		outline: none;
		font-size: 30px;
		color: #fff;
		margin-right: 10px;
	}
	#app p button:last-child{
		line-height: 0px;
	}
	
	#app .actions button{
		width: 100px;
		font-size: 16px;
	}
	
</style>