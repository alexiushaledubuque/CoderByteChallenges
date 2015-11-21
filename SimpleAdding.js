/*
Simple Adding 

Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. For the test cases, the parameter 
num will be any number from 1 to 1000
*/

function SimpleAdding(num) { 
  var sum = 0;
  for (var x = 1; x <= num; x++)	// iterate over numbers from 1 to num value
    sum += x;						// increment sum by the value of x
  return sum; 						// return the sum to display to the console
}

