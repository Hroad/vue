$(function(){
	// layui部分
	layui.use('element', function(){
	  var element = layui.element;
	});	
	
	$.ajax({
		url:"http://campus.51job.com/test/sc.json",
		// url:"http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=15872773491",
		type: "post",
		// data: "{'id':'7','name':'张三','sc':'床前明月光，低头泪汪汪。','cc':'管理层'}",//参数，这里是一个json语句
		dataType: 'jsonp',
		jsonpCallback:"ry",
		success:function(data){
			console.log(data)
			var a = data;
			var html = ''
			var html1 = ''
			for(var i=0;i<a.length;i++){
				
				if($('.rygl').text() == a[i].cc){
					html += '<dd><a href="#">'+a[i].name+'</a></dd>'
				}
				if($('.rypt').text() == a[i].cc){
					html1 += '<dd><a href="#">'+a[i].name+'</a></dd>'
				}
				$('.rwscs').html('<div class="layui-card-header"><span class="rwm">'+a[0].name+'</span>写过这样一句诗：</div><div class="layui-card-body rwsj">'+a[i].sc+'</div>')
				

			}
			$('.rysgl').html(html)
			$('.ryspt').html(html1)
			
			$('.rys dd a').click(function(){
				event.preventDefault()
				for(var i=0;i<a.length;i++){
					if($(this).text() == a[i].name){
						// console.log(1111)
						$('.rwscs').html('<div class="layui-card-header"><span class="rwm">'+a[i].name+'</span>写过这样一句诗：</div><div class="layui-card-body rwsj">'+a[i].sc+'</div>')
						
					}
				}
			})
			
		}
	})	
	
})