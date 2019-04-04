<template>
	<div class="about">
		<div class="title"><img src="../img/t2.png" ></div>
		<div class="txt">
			<div class="lc"><img src="../img/lc.png" ></div>
			<div class="bt bt2">双选会</div>
			<div class="xc">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<th>城市</th>
						<th>学校</th>
						<th>校区</th>
						<th>时间</th>
						<th>地点</th>
					</tr>
					<tr>
						<td>长春市</td>
						<td>长春理工大学</td>
						<td>本校</td>
						<td>3月20日	周三	9:00 - 12:00</td>
						<td>长春理工大学东区体育馆</td>
					</tr>
					<tr>
						<td>长春市</td>
						<td>吉林大学</td>
						<td>综合校区</td>
						<td>3月20日	周三	13:00 - 17:00</td>
						<td>吉林大学前卫南区体育馆</td>
					</tr>
					<tr>
						<td>延吉市</td>
						<td>延边大学</td>
						<td>本校</td>
						<td>3月23日	周六	9:00 - 12:00</td>
						<td>延边大学第二食堂三楼报告厅</td>
					</tr>
					<tr>
						<td>威海市</td>
						<td>哈尔滨工业大学威海校区</td>
						<td>威海校区</td>
						<td>3月25日	周一	8:00 - 12:00</td>
						<td>学校研究院一楼、二楼大厅</td>
					</tr>
				</table>
			</div>
			
		</div>

	</div>
</template>

<script>
	export default{
		name:'xc'
	}
</script>

<style>
	.xc{
	width: 1000px;
	margin: 0 auto;
}
.xc table{
	width: 100%;
}
.xc table tr{
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	color: #C3152C;
	font-weight: bold;
	text-align: center;
}

.xc table tr td:first-child{
	padding-left: 20px;
}
.xc table tr th:first-child{
	padding-left: 20px;
}
.xc table tr:nth-child(even){
	background: #ffebee;
}
.xc table tr:nth-child(odd){
	background: #f8f8f8;
}
.xc table tr:first-child{
	background: #C3152C;
	color: #FFFFFF;
	font-size: 20px;
}
</style>
