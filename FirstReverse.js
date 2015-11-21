/*
First Reverse
Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
*/

function FirstReverse1(str) {
	var nw = "";
	for(var i = str.length - 1; i >= 0; i--) //standard iteration of the string from back to front
		nw += str[i];			//append the character to the string

  	return nw;
}

//Or
 
function FirstReverse2(str) { 			
   return str.split("").reverse().join("");	// chain the methods 1. convert to an array 2. reverse the array 3. convert back to a string
}

console.log(FirstReverse2("this is life"));

/*	Test Cases
Input = "coderbyte"   Output = "etybredoc"
Input = "I Love Code" Output = "edoC evoL I"
*/