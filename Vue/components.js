/*Vue Components*/
Vue.component('greet',{
	template: '<div class="container"><h1>Heya World! I am a component yo!!</h1></div>'
});

Vue.component('counter',{
	data(){
		return{
			count:0
		}	
	},
	template: '<div class="container"><button class="btn btn-success" v-on:click="count++">You clicked me {{count}} times</button></div>'
});

Vue.component('change-text',{
	data(){
		return{
			message: 'First Message'
		}
	},
	methods:{
		changeText(){
			this.message='Another message';
		}
	},
	template: '<div class="container"><h4>{{message}}</h4><button class="btn btn-info" @click="changeText">Change Text</button></div>'
});

Vue.component('user-name',{
	props: ['name','id'],
	template: '<h1>Hello {{ name }}</h1>'
});

new Vue({
	el:'#app',
	data: {

	}
})