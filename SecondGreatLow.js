Second Great Low

/* 
Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers 
stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. 
For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty 
and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/

function SecondGreatLow(arr) {
  var secondLowest = 0, secondGreatest = 0, tmp = 0;
  arr = arr.sort(function(a,b){     // sort the numbers to determine the highest and lowest numbers of the array
    return a - b;
    });
    
  for (var i = 0; i < arr.length; i++){
    if (arr[i] == arr[i + 1]){      // shift the lowest number and any following duplicate number
       	tmp = arr.shift();
          i -= 1;
    }
      else if (arr[i] < arr[i + 1]){
       	secondLowest = arr[i+1];    // set the 2nd lowest number verifying its value is less than the next array number
          i += arr.length;
    } 
    }
 
  for (var e = arr.length - 1; e > 0; e--){
    if (arr[e] == arr[e - 1]){      // iterate over the array again in reverse, pop the greatest number
       	tmp = arr.pop();
          e += 1;
    }
    else if (arr[e] > arr[e - 1]){  // set the 2nd greatest number verifying its value is less than the next array number
          e = 0;
    } 
  } 
  return String(secondLowest) + " " +  String(secondGreatest);  // return value       
}

console.log(SecondGreatLow([7, 7, 7, 12, 98, 106]));  //execute the function and return the results to the console.

/*  Test Data
Input = 1, 42, 42, 180 Output = "42 42"
Input = 4, 90 Output = "90 4"
*/
