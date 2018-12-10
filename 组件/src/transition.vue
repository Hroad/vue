<template>
	<div>
		<button @click="show =! show">show/hide</button>
		<transition name="fade">
			<p v-if="show">hello Word</p>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'demo',
		data() {
			return {
				show:true,
			};
		}
	}
</script>

<style scoped="scoped">
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
</style>
