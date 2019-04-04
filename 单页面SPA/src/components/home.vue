<template>
	<div class="warp">
		<img src="../img/jg.jpg" class="bg"/>
		<router-link to='/com/about'><img src="../img/enter.png"/></router-link>
		
		<div class="footer">
			<img src="../img/hand.png" />&nbsp;&nbsp;未经51job.com同意，不得转载本网站之所有招聘信息及作品；无忧工作网版权所有&copy;1999-
				{{ year }}
		</div>
		
	</div>
</template>

<script>
	export default {
	  name: 'home',
		computed: {
			year(){
				let now=new Date()
				return now.getFullYear()
			}
		},
		
	}
</script>

<style>
body,html{
	min-width: 1280px;
	min-height: 680px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	
}
*{
	box-sizing: border-box;
}
body{
	font-family: "微软雅黑" !important;
}
a{
	text-decoration: none !important; 
}

.warp{
	min-width: 1280px;
	min-height: 680px;
	overflow: hidden;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;

}
.bg{
	width: 100%;
	height: 100%;
}

.warp a{
	width: 10%;
	display: block;
	margin: 0 auto;
	position: absolute;
	bottom: 64%;
	right: 5.8%;
   
}

.warp a img{
	width: 100%;
}




.footer{
	position: absolute;
	bottom: 0%;
	width: 100%;
	text-align: center;
	color: #000;
	/* padding: 10px 0; */
	/* background: rgba(29,32,136,0.45); */
}
.footer img{
	vertical-align: middle;
}
</style>
