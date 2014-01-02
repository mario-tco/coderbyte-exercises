function Factorial(num){
	if(!isInteger(num)){console.log(num + " is not a valid number :( \n");return false;}
	console.log(num + ' is a valid number!')
	if(num == 0 || num == 1){ return num; }
	for(var i=1, result=1;i<=num;i++){result=result*i}
	console.log('Factorial of ' + num + ' = ' + result + '\n');
	return result;
}
function isInteger(value){
	var regexp = /^\d+$/;
	return regexp.test(value);
}

var input = "11";
Factorial(input);

//Unit tests

assertTrue(Factorial(0)==0, 'Zero');
assertTrue(Factorial(1)==1, 'One');
assertTrue(Factorial(-1)==false);


function assertTrue(value, message){
	if(!value){console.log('Error in test: ' + message)}
}