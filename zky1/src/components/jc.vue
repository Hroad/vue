<template>
	<div class="about">
		<div class="bt bt2">
			<div v-for="(tab,index) in tabs" :key='index' 
			 @click="toggle(index,tab.pages)" 
			 :class="[{on:on==index},tab.lei]">
				<span>{{ tab.name }}</span>
			</div>
		</div>
		<div class="txts">
			<component :is="currentView"></component>	
		</div>
	</div>
</template>

<script>
	import wh from './txt2/wh.vue'
	import px from './txt2/px.vue'
	import hd from './txt2/hd.vue'
	export default {
		name:'jc',
		components:{
			wh,
			px,
			hd
		},
		data() {
			return {
				on:0,
				currentView:'wh',
				tabs:[
					{
						name:'企业文化',
						pages:'wh',
						lei:'z',
					},
					{
						name:'培训与发展',
						pages:'px',
						lei:'m',
					},
					{
						name:'员工活动',
						pages:'hd',
						lei:'y',
					},
				]
			}
		},
		methods:{
			toggle(i,v){
				this.on=i;
				this.currentView=v;
				
			}
		},
		
	}
</script>

<style>
	
	.ab{
		overflow: hidden;
	}
		
	.ab p{
		font-size: 16px;
		line-height: 30px;
		text-indent: 2em;
		text-align: justify;
	}
	.ab img{
		float: right;
		margin: 5px 0 0px 35px;
	}
	
	.bt2 div{
		 width: 280px;
	}
	.bt2 .m{
		float: left;
		margin-left: 80px;
		transform: skewX(-45deg);
	}
	.m span{
		display: block;
		transform: skewX(45deg);
	}
	.bt2 .m::before{
		display: none;
	}
	.bt2 .y{
		width: 280px;
	}
	.px{
		width: 809px;
		margin: 50px auto 0;
	}
</style>
