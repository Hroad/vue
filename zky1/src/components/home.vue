<template>
	<div class="container">
		<div class="header">
			<div class="header-ln">
				<div class="log-nav">
					<div class="log"><img src="../img/logo.png"/></div>
					<div class="nav">
						<ul>
							<li><router-link to='/'>公司简介</router-link></li>
							<li><router-link to='jc'>中科检测零距离</router-link></li>
							<li><router-link to='job'>招聘专区</router-link></li>
							<li><a href="http://www.cas-test.org/" target="_blank">公司官网</a></li>
							<span style="padding-top: 8px;display: inline-block; margin-left: 10px;"><img src="../img/wx.png" ></span>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="banner"><img src="../img/banner.png"/></div>
		
		<div class="content">
			
				<router-view></router-view>
			
			
		</div>
		
		<div class="footer1">
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

/* ---------------------------------------- */

.container{
	min-width: 1280px;
	width: 100%;
	margin: 0 auto;
}
.header{
	width: 100%;
	margin: 0 auto;
	border-bottom: 2px solid #388dff;
}
.header-ln{
	min-width: 1100px;
	width: 100%;
	height: 68px;
	margin: 0 auto;
}
.log-nav{
	width: 1100px;
	margin: 0 auto;
	overflow: hidden;
}

.header-ln .log{
	width: 205px;
	padding-top: 3px;
	float: left;
}
.header-ln .nav{
	width: 650px;
	float: right;
}

.nav ul{
	display: block;
	height: 68px;
	line-height: 68px;
	overflow: hidden;
}
.nav ul li{
	width: 120px;
	float: left;
	font-size: 18px;
	text-align: center;
	margin-right: 10px;
}
.nav ul li:nth-child(2){
	width: 150px;
}

.nav ul li a{
	display: block;
	color: #388dff;
	text-decoration: none;
	letter-spacing: 2px;
}
.nav ul li a:hover{
	background: #388dff;
	color: #fff;
	font-weight: bold;
}
.nav ul li .router-link-active.router-link-exact-active{
	background: #388dff;
	color: #fff;
	font-weight: bold;
}


.banner{
	min-width: 1280px;
	width: 100%;
	min-height: 462px;
	height: 100%;
	margin: 0 auto;
}
.banner img{
	width: 100%;
}

.content{
	min-width: 1280px;
	width: 100%;
	margin: 0px auto 0;
}
.about{
	width: 1000px;
	margin: 0 auto;
	margin-top: 30px;
	padding-bottom: 50px;
}


.bt{
	overflow: hidden;
}
.bt div{
	float: left;
	position: relative;
    background: #006834;
    width: 311px;
    height: 51px;
	line-height: 51px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
}
.bt div::before{
    content: '';
    position: absolute;
    right: -25px;
    top: 0;
    width: 60px;
    height: 51px;
    background: #006834;
    transform: skewX(-45deg);
}
.bt div:hover,.bt div:hover::before{
	background: #388dff;
}

.bt .y{
	float: right;
	position: relative;
    background: #006834;
    width: 311px;
    height: 51px;
	line-height: 51px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
}
.bt .y::before{
    content: '';
    position: absolute;
    left: -25px;
    top: 0;
    width: 60px;
    height: 51px;
    background: #006834;
    transform: skewX(-45deg);
}

.bt .on,.bt .on::before{
	background: #388dff;
}
.title{
	margin: 40px auto;
}



.footer1{
	min-width: 1280px;
	width: 100%;
	margin:0px auto 0;
	text-align: center;
	color: #fff;
	padding: 10px;
	background: #388dff;
	border-top: 2px solid #eb6100;
}
.footer1 img{
	vertical-align: middle;
}



</style>
