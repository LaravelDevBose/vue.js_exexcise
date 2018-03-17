new Vue({
	el:'#app',
	data:{
		num:1,
		x:0,
		y:0,
        pressKey:'',
        keyUp:'',
        keyAltUp:'',
		ave:false,
        nearBy:false
	},
	methods:{
		greet:function(parameters){
            var time = parameters.time;
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
		},
		onceModifier:function(){
			alert('This  Click Button Just Work For One Time')
		},
		preventModifier:function(){
			alert('Not Got Default Url')
		},
		keyPress:function (event) {

		    this.pressKey += event.key;

        },
        keyUpHitEnter:function () {

            this.keyUp = 'you Press The Enter'
        },
        keyUpHitAltssEnter:function () {
            this.keyAltUp ='You Hit Alt Plus Enter'
        }

	},
    computed:{
        comptClasses:function(){
            return{
                ave:this.ave,
                nearBy: this.nearBy,
            }
        }
    }


});