/*
Letter Capitalize
Using the JavaScript language, have the function LetterCapitalize(str) take the str 
parameter being passed and capitalize the first letter of each word. Words will be 
separated by only one space. 
*/

function LetterCapitalize(str){ 
  var arr = str.split(" ");		// convert the string into an array to separate the words
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }				//up case the first letter then append other characters to the string
  return arr.join(" "); // convert the array to a string and return to the console.
}