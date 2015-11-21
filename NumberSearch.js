/*
Number Search

Using the JavaScript language, have the function NumberSearch(str) take the str 
parameter, search for all the numbers in the string, add them together, then return 
that final number. For example: if str is "88Hello 3World!" the output should be 91. 
You will have to differentiate between single digit numbers and multiple digit numbers
like in the example above. So "55Hello" and "5Hello 5" should return two different 
answers. Each string will contain at least one letter or symbol. 
*/

function NumberAddition(str) { 
  str = str.match(/\d+/g);		// create a new array of the numbers in the string
  var sum = 0;

  for (var i = 0; i < str2.length; i++){
  		sum += parseInt(str2[i]);	// convert the strings to numbers and accumulate
  }
  return sum;		// return the sum to the console
}

console.log(NumberAddition("75Number9"));

/*	Test Cases
Input = "75Number9" Output = 84
Input = "10 2One Number*1*" Output = 13
*/