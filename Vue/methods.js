new Vue({
	el: '#app',
	data:{
		message:'Hello World',
		date: '',
		counter: 0,
		txtColor: 'white',
		bgColor: 'red',

	},
	methods:{
		changeText(){
			this.message="Changed Via Method";
		},
		showDate(){
			this.date=Date().toLocaleString();
		},
		counterData(){
			this.counter=this.counter+1;
		},
		changeColor(){
			this.bgColor='blue';
		}
	}


})