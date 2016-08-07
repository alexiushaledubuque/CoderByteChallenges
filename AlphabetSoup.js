/*
Alphabet Soup
Using the JavaScript language, have the function AlphabetSoup(str)
take the str string parameter being passed and return the string 
with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 
*/

function AlphabetSoup(str) {  
  return str.split("").sort().join(""); 	// chain the methods then return
}	// 1. convert to an array 2. sort the array 3. convert back to a string

console.log(AlphabetSoup("hooplah"));
/*
Input = "coderbyte" Output = "bcdeeorty"
Input = "hooplah" Output = "ahhloop"
*/