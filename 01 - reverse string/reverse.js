
function ReverseString(str){
	if(isString(str)){
		var strArray = str.split("");
		var result = '';
		for(var i = strArray.length-1; i >= 0; i--){
			result = result + strArray[i];
		}
		console.log(result);
	}
}

function isString(str){
	if (typeof(str) == "string"){
		console.log("Awesome! '" + str + "' is a string! \n");
		return true;
	}
	else {
		//var toString = Object.prototype.toString;
		console.log(toString.call(str));
		if( Object.prototype.toString.call(str) == '[object String]'){
			console.log( str + " is not a native String... but it's still ok! \n")
			return true;
		} else{
			console.log("Aww, no string :(!");
			console.log('this is actually some kind of ' + typeof(str) + ' thing \n');
			return false;	
		}
		
	}
}

// Blood Lust! Execute!
var input = 'This is awesome!';
ReverseString(input);

// Unit tests
console.log('\n \nUnit test time!')
assertTrue(isString("string literal"), "string literal");
assertTrue(isString(new String("String object")), "String object");
assertFalse(isString(1), "number literal");
assertFalse(isString(true), "boolean literal");
assertFalse(isString({}), "object");
assertFalse(isString(null), "null");
assertFalse(isString(), "nothing");
assertFalse(isString(new Function("String")), "nothing");
assertTrue(false, "wat");

function assertTrue(value, message){
	if(!value){
		console.log('Assertion error: ' + message)
	}
}

function assertFalse(value, message){
	assertTrue(!value, message)
}