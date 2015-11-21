/*
Vowel Count

Using the JavaScript language, have the function VowelCount(str)
take the str string parameter being passed and return the number
of vowels the string contains (ie. "All cows eat grass" would return 5).
Do not count y as a vowel for this challenge. 
*/

function VowelCount(str) {
  return str.match(/[aeiou]/gi).length;//match the vowels and return the string length      
}

console.log(VowelCount("hello"));
/*
Input = "hello"     Output = 2
Input = "coderbyte" Output = 3
*/