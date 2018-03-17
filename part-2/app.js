var app = new Vue({
	el:'#app',
	data:{
		num:1,
		x:0,
		y:0,
        pressKey:'',
        keyUp:'',
        keyAltUp:'',
		ave:false,
        nearBy:false,
        skills:['HTML', 'CSS','PHP','Laravel','JavaScript','JQuery','Java','C','Vue.js'],
        friends:[
            {'name':'Hasib','age':'24'},
            {'name':'Tommoy','age':'24'},
            {'name':'Suvo','age':'25'},
            {'name':'Amit Nag','age':'24.5'},
            {'name':'Amit Chandro','age':'24'},
            {'name':'Dipok','age':'24'}
        ]
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