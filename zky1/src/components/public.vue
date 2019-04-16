<template>
	<div class="about">
		<div class="bt">
			<div v-for="(tab,index) in tabs" :key='index' 
			 @click="toggle(index,tab.pages)" 
			 :class="[{on:on==index},tab.lei]">
				{{ tab.name }}
			</div>
			
		</div>
		<div class="txts">
			<component :is="currentView"></component>	
		</div>	
		
	</div>
</template>

<script>
	import gy from './txt/gy.vue'
	import lx from './txt/lx.vue'
	export default {
		name:'com',
		components:{
			gy,
			lx,
		},
		data() {
			return {
				on:0,
				currentView:'gy',
				tabs:[
					{
						name:'关于我们',
						pages:'gy',
						lei:'z',
					
					},
					{
						name:'联系我们',
						pages:'lx',
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

.fab h2{
	color: #388dff;
	font-size: 18px;
	margin-bottom: 10px;
	margin-top: 40px;
}

.i-lists{
	overflow: hidden;
}
.i-lists li{
	float: left;
	width: 40%;
	font-size: 16px;
}
.i-lists li:nth-child(1){
	width: 40%;
}
.i-lists li:nth-child(2){
	width: 20%;
}
.i-lists li:nth-child(1)::before{
	content: '';
	display: inline-block;
	width: 26px;
	height: 24px;
	background: url(../img/icon1.png) no-repeat center center/100%;
	margin-right: 10px;
}
.i-lists li:nth-child(2)::before{
	content: '';
	display: inline-block;
	width: 22px;
	height: 21px;
	background: url(../img/icon2.png) no-repeat center center/100%;
	margin-right: 10px;
	vertical-align: middle;
}
.i-lists li:nth-child(3)::before{
	content: '';
	display: inline-block;
	width: 30px;
	height: 24px;
	background: url(../img/icon3.png) no-repeat center center/100%;
	margin-right: 10px;
	vertical-align: middle;
}


.sq{
	width: 1000px;
	margin: 30px auto;
}



	
</style>
