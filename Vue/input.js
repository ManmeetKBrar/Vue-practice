var app = new Vue({
	el:'#app',
	data:{
		name_data:'',
		check_data: true,
		checkedNames: [],
		picked: '',
		selected:'',
		datas: ["Ross","Rachel","Monica","Phoebe","Joey","Chandler"],
		selectedMul: [],
		num1: 10,
		num2: 20
	},
	computed:{
		sum(){
			return this.num1 + this.num2;
		}
	}
})