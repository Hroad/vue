<template>
  <!--只能有一个根节点-->
  <div>
  	v-text:<br />
  	<span v-text="text"></span>
  	<input type="text" v-text="text" />
  	<hr />
  	v-html:<br />
  	<span v-html="html"></span>
  	<hr />
  	v-if:<br />
  	<div v-if="isShow" style=" height: 100px; background: #f00;"></div>
  	<hr />
  	v-show:<br />
  	<div v-if="isShow" style=" height: 100px; background: green;"></div>
  	
  	<hr />
  	v-model:<br />
  	<input type="text" v-model="mTest" />
  	{{mTest}}<br />
  	给下面的input赋值用v-bind:value="mTest"
  	<input type="text" v-bind:value="mTest" />
  </div>
</template>

<script>
	export default {
		data(){
			return{
				text:'我是v-text',
				html:`
					<ul>
						<li>哈哈</li>
						<li>呵呵</li>
					</ul>
				`,
				isShow: true,
				mTest:'哈哈'
			}
		}
	}
</script>

<style>

</style>
