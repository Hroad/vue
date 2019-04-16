<template>
	<div class="about">
		<div class="txts">
			<div class="txt">
				<div class="title"><img src="../img/t5.png" ></div>
				
				<div class="ssq search">
					<select id="divid">
						<option value="">选择部门 </option>
					</select>
					<select id="functype">
						<option value="">选择职能 </option>
					</select>	
					<select id="jobarea">
						<option value="">工作城市 </option>
					</select>
	
					<div class="input">
						<img src="../img/in_an.png" alt="" class="ss in">
						<input id="keyword" type="text" placeholder="输入职位关键字 " style="margin-top: 0% !important;">
						<img src="../img/input.png" alt="" class="ss ssan">
						
					</div>
				</div>
				
				<div class="job-sx">
					<div class="qz">全职招聘</div>
					<div class="sx">实习生</div>
				</div>
				
				<div class="job">
					<div class="jobm">
						<ul>
							<li>职位名称</li>
							<li>部门名称</li>
							<li>工作城市</li>
							<li>工作职能</li>
						</ul>
					</div>
					
					<div class="joblist">
						<ul>
							<li><a href="#">职位名称</a></li>
							<li>职位名称</li>
							<li>职位名称</li>
							<li>职位名称</li>
						</ul>
					</div>
				</div>
				
				
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:'job',
		data:{
			params:[
				{ctmid:'1189'},
			]
		},

		
// 		methods:{
// 			ssq(){
// 				getJobCondition(this.ctmid,function(data){ 
// 					//取到数据之后的操作
// 					console.log(data)
// 				}, this.params);
// 			}
// 		}
	}
</script>

<style>
	.ssq{
		width: 1000px;
		height: 70px;
		margin: 0 auto;
		background:#c8e0ff;
		border-radius: 15px;
		padding-left: 30px;
	}
	.ssq select{
		margin-left: 5px;
		width: 130px;
		height: 70px;
		background: rgba(255,255,255,0.1);
		border: none;
		outline: none;
		font-size: 18px;
		color: #569ee8;
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;
		-ms-appearance:none;
		background: url(../img/jiant.png) no-repeat right center;
		margin-right: 20px;
		text-align: center;
		
	}
	select::-ms-expand { display: none; }
	.input{
		width: 388px;	
		height: 50px;
		line-height: 50px;
		display: inline-block;
		position: relative;
		border-left: 2px solid #0e56a0;
		margin-top: 10px;
	}
	.input input{
	    height: 50px;
	    line-height: 50px;
		width: 380px;
		outline: none;
		border: 0;
		background: transparent;
		padding-left:70px;
		font-size: 16px;
		font-family: "微软雅黑";
		color: #0e56a0;
	}
	.input .ssan{
		width: 35px;
	    height: 28px;
		position: absolute;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		font-size: 18px;
	}
	.input .in{
		width: 91px;
		height: 70px;
		position: absolute;
		top: 46.3%;
	    transform: translateY(-47.5%);
	    right: -117px;
		cursor: pointer;
	}
	
	.job-sx{
		overflow: hidden;
		margin: 30px 0 30px 60px;
		
	}
	.qz{
		float: left;
		font-size: 16px;
		color: #3b78c8;
		cursor: pointer;
	}
	.qz::before{
		content: '';
		display: inline-block;
		width: 23px;
		height: 23px;
		background: url(../img/icon4.png) no-repeat center center/100%;
		margin-right: 10px;
	}
	.sx{
		float: left;
		font-size: 16px;
		color: #3b78c8;
		margin-left: 100px;
		cursor: pointer;
	}
	.sx::before{
		content: '';
		display: inline-block;
		width: 23px;
		height: 23px;
		background: url(../img/icon4.png) no-repeat center center/100%;
		margin-right: 10px;
	}
	
	.jobm{
		width: 1000px;
		background: #3b78c8;
	}
	.jobm ul{
		overflow: hidden;
		display: flex;
	}
	.jobm ul li{
		height: 40px;
		line-height: 40px;
		flex: 1;
		text-align: center;
		font-size: 18px;
		color: #fff;
		border-right: 2px solid #fff;
	}
	
	.joblist{
		/* position: relative; */
		height: 400px;
		overflow: hidden;
	
	}
	
	.joblist ul{
		overflow: hidden;
		border-bottom: 2px dotted #3b78c8;
		padding: 10px 0;
		
		/* position: relative; */
	}
	.joblist ul li{
		width: 25%;
		float: left;
		text-align: center;
		font-size: 14px;
	}
	
	.joblist ul li a{
		color: #000;
	}
</style>
