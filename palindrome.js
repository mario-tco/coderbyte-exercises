function isPalindrome(str){
	var punctuationless = str.replace(/[\.,-\/#!$%\^&\*;:{}?"“”’=\-_`~()]/g,"");
  	var finalString = punctuationless.replace(/\s{2,}/g," ");
	str = finalString.toLowerCase();
	console.log(str);
	var strArray = str.split("");
	for(var i = 0, j = strArray.length-1; i<Math.floor(strArray.length/2);i++){
		console.log(i);
		console.log(j);
		if(strArray[i]==' '){i++;}
		if(strArray[j]==' '){j--;}
		console.log('Is "' + strArray[i] + '" the same as "' + strArray[j] + '"?')
		if(strArray[i]!=strArray[j]){
			console.log('Aww! Not a palindrome :(')
			return false;
		}
		j--;
	}
	console.log('Woo! A palindrome!')
	return true;
}


assertTrue(isPalindrome("Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era."), "This will pass O_O");

function assertTrue(value, message){
	if(!value){console.log('Errr!')}else{console.log(message)}
}