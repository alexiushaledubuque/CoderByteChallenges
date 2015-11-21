/*
Using the JavaScript language, have the function SwapCase(str) take the 
str parameter and swap the case of each character. For example: if str is "Hello World" 
the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 
*/

function SwapCase(str) { 
  var results = "";
  
  for (var i = 0; i < str.length; i++){       //iterate over each character
      if (str[i] == str[i].toUpperCase()){    //test if the character is upper or lower case
          results += str[i].toLowerCase();    //change to lowercase and append to the string
      }
      else {
          results += str[i].toUpperCase();    //change to uppercase and append to the string
      }
  }
  return results;                     //return the string to the calling function
}

console.log(SwapCase("Hello-LOL"));

/*  Test Cases
Input = "Hello-LOL"    Output = "hELLO-lol"
Input = "Sup DUDE!!?"  Output = "sUP dude!!?"
*/


