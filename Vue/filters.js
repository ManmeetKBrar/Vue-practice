/*Global Filters*/
Vue.filter('capitalize', function(value){
	return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
})

/*filter to convert to JSON format*/
Vue.filter('json' ,function(value){
	return JSON.stringify(value);
})

/*filter to find min using spread operator ...*/
Vue.filter('minNo', function(value){
	return Math.min(...value);
})


/*main vue code block*/
var app=new Vue({
	el:'#app',
	data:{
		message:'hello world',
		/*object creation - used in json filter*/
		user:{
			username: 'manmeet',
			email:'manmeet@gmail.com',
			country: 'India'
		},
		/*array of nos*/
		nos: [100,22,32,56,89,11,44,223,7,229,8,3,6],
	},
	filters:{
		/*Local String Filters*/
		uppercase(value){
			return value.toUpperCase();
		},
		titleCase(str){
		    str = str.toLowerCase().split(' ');

		   let final = [ ];

		    for(let  word of str){
		      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
		    }

		  	return final.join(' ')      
   		},
   		titleize(value){
       		return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
    	},
   		camelCase(str){
		   return str.split(' ').map(function(word,index){
		    // If it is the first word make sure to lowercase all the chars.
		    if(index == 0){
		      return word.toLowerCase();
		    }
		    // If it is not the first word only upper case the first char and lowercase the rest.
		    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		 	 }).join('');   
   		},
   		countLetters(value){
   			return value.length;
   		},
   		repeatText(string,times){
   			return string.repeat(times);
   		}
  	}
})