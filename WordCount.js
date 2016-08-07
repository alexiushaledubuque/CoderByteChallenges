/*
Word Count
Using the JavaScript language, have the function WordCount(str)
take the str string parameter being passed and return the number
of words the string contains (ie. "Never eat shredded wheat" would
return 4). Words will be separated by single spaces. 
*/

function WordCount(str) { 
  return str.split(" ").length;	//convert string to an array and return array length  
}

console.log(WordCount("one three")); 
/*
Input = "Hello World"  Output = 2
Input = "one 22 three" Output = 3
*/
Contact GitHub API Training Shop Blog About