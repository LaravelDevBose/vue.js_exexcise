

var app = new Vue({
	el:'#app',
	data: {
		welcome:'Welcome To My First Vue Js App',
		welcomeTitle: 'WelCome',
		seen: true,
		todos:[
			{id:'1', text:'this is 1'},
			{id:'2', text:'this is 2'},
			{id:'3', text:'this is 3'},
			{id:'4', text:'this is 4'},
			{id:'5', text:'this is 5'},
			{id:'6', text:'this is 6'},
			{id:'7', text:'this is 7'},
			{id:'8', text:'this is 8'},
			{id:'9', text:'this is 9'},
			{id:'10', text:'this is 10'},

		],
		counts:10,
		message:' ',
		vText:'This is v-text Example',
		vHtml:'<span class="text-danger">This is v-html Directives Example',
		show: false,
		title: 'you load this page at '+ new Date(),
		image:'https://vuejs.org/images/logo.png',
		bindValye: 'When you change The Input it change Automatic',
		counter:0,
		hoverValue:' ',
		url:'',
		cleanUrl:'',
		firstName:'',
		lastName:'',
		xp: 10,
		
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split(' ').reverse().join(' ')
		},
		countUp: function(){
			this.counter = this.counter +=1
		},
		countDown : function(){
			if(this.counter <= 0){
				this.counter = 0,
				alert('counter value is less than 0 is not acceptable');
			}else{

				this.counter = this.counter -=1
			}
		},
		mouseOver: function(){

			this.hoverValue = '<div style="width:100%; height:200px; background-color:#2de493;"></div>'
		},
		mouseLeave:function(){

			this.hoverValue=' '

		},
		humanizeUrl:function(){
			this.cleanUrl = this.url.replace(/^https?:\/\//,'').replace(/\/$/,'')
		},
		addXp: function(){
			return this.xp += 10
		},
		decreaseXp : function(){
			return this.xp -= 10
		}

	},
	computed:{
		firstNameUpperCase:function(){
			return this.firstName = this.firstName.charAt(0).toUpperCase()+this.firstName.slice(1)
		},
		lastNameUpperCase: function(){
			return this.lastName = this.lastName.charAt(0).toUpperCase()+this.lastName.slice(1)
		},
		fullName : function(){

			return  this.firstNameUpperCase +" "+this.lastNameUpperCase
		},
		lavel: function(){

			if(this.xp > 300){
				return "Advance Level"
			}else if(this.xp > 200){
				return "Intermediate Level"
			}else if(this.xp >100){
				return "Beginner Level"
			}else if(this.xp >= 0){
				return "Fundamental Level "
			}else{
				return "Banned"
			}
		},
		lavelColor:function(){

			if(this.xp > 300){
				return "text-success"
			}else if(this.xp > 200){
				return "text-primary"
			}else if(this.xp >100){
				return "text-info"
			}else if(this.xp >= 0){
				return " "
			}else{
				return "text-danger"
			}
		}
	}
});