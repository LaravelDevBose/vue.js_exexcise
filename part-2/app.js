new Vue({
	el:'#app',
	data:{
		num:1,
		x:0,
		y:0
	},
	methods:{
		greet:function(time = 'Morning'){
			return "Good "+time
		},
		add:function(inc){
			this.num += inc
		},
		sub:function(dec){
			this.num -= dec
		},
		mousePosition:function(event){
			this.x=event.offsetX;
			this.y = event.offsetY
		}
	}

});