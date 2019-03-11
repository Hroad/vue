let app = new Vue({
	el:'#app',
	data: {
		list: [
			{
				id: 1,
				name: 'iphone7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'ipad pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name: 'macbook pro',
				price: 21488,
				count: 1
			}
		]
	},
	computed: {
		totalPrice: function (){
			let totla = 0;
			for (let i=0; i<this.list.lenght; i++){
				let item = this.list[i];
				totle+=item.price*item.count;
			}
			return totle.toString().replace(/\B(?=(\d{3})+$)/g,',');   
//			千位分隔符的正则表达式
		}
	},
	methods: {
		handleReduce:function (index){
			if(this.list[index].count===1) return;
			this.list[index].count--;
		},
		handleAdd:function (index){
			this.list[index].count++;
		},
		handleRemove:function (index){
			this.list.splice(index,1);
		}
	}
});