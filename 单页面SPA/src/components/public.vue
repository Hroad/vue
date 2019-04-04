<template>
	
	<div class="container">
		
		<div class="header">
			<div class="header-ln">
				<div class="log-nav">
					<div class="log"><img src="../img/logo.png"/></div>
					<div class="nav">
						<ul>
							<li>
								<router-link to='about'>公司简介</router-link>	
							</li>
							<li>
								<router-link to='job'>招聘岗位</router-link>	
							</li>
							<li>
								<router-link to='xc'>双选会行程</router-link>	
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div class="banner"><img src="../img/banner.png" ></div>
		
		<div class="content">
			
			<router-view></router-view>
		
		</div>
		
		<div class="footer1" style="margin: 0 auto;">
			<img src="../img/hand.png" />&nbsp;&nbsp;未经51job.com同意，不得转载本网站之所有招聘信息及作品；无忧工作网版权所有&copy;1999-
			{{ year }}
		</div>

	</div>
</template>

<script>
	export default {
		name:'com',
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
.container{
	min-width: 1280px;
	width: 100%;
	margin: 0 auto;
}
.header{
	width: 100%;
	margin: 0 auto;
	border-top: 3px solid #c3152c;
}
.header-ln{
	width: 1100px;
	height: 78px;
	margin: 0 auto;	
}
.log-nav{
	width: 1100px;
	margin: -5px auto 0;
	overflow: hidden;
}

.header-ln .log{
	width: 61px;
	padding-top: 10px;
	float: left;
}
.header-ln .nav{
	width: 580px;
	float: right;
	/* padding-top: 20px; */
}

.nav ul{
	display: block;
	height: 73px;
	line-height: 73px;
	padding-top: 5px;
}
.nav ul li{
	width: 123px;
	float: left;
	margin-right: 20px;
	font-size: 18px;
	text-align: center;
}


.nav ul li a{
	display: block;
	font-size: 18px;
	color: #c3152c;
	
}
.nav ul li a:hover{
	color: #fff;
	background: #c3152c;
}
.nav ul li .active{
	color: #fff;
	background: #c3152c;
}



.banner{
	min-width: 1280px;
	width: 100%;
	margin: 0px auto;
}
.banner img{
	width: 100%;
}

.content{
	width: 1000px;
	margin: 0px auto 0;
	
}
.about{
	padding-top: 30px;
	padding-bottom: 80px;
	color: #221814;
}


.footer1{
	min-width: 1280px;
	width: 100%;
	margin:50px auto 0;
	text-align: center;
	color: #fff;
	padding: 10px;
	background: #c3152c;
}
.footer1 img{
	vertical-align: middle;
}
	
</style>
