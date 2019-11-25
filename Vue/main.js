new Vue({
			el:'#app',
			data:{
				message: 'Hello World !!',
				first: 'Harry',
				last: 'Potter',
				city: 'London',
				num1: 100,
				num2: 250,
				htmlContent: '<div><h2>Vue Directives usage</h2></div>',
				imgSrc1: 'C:/Users/798021/Downloads/harrypotter.jpg',
				imgSrc2: 'C:/Users/798021/Downloads/flower.jpg',
			},
			computed:{
				greet(){
					return"Hello, I am printed using Computed method. I am "+this.first+" "+this.last+
					" from "+this.city;
				},
				now(){
					return Date().toLocaleString();
				},
				stringRev(){
					return this.message.split('').reverse().join('');
				},
				sum2nos(){
					return this.num1+this.num2;
				}
			}

		})