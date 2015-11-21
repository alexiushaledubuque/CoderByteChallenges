/*
Additive Persistence
Using the JavaScript language, have the function AdditivePersistence(num)
take the num parameter being passed which will always be a positive integer
and return its additive persistence which is the number of times you must add
the digits in num until you reach a single digit. For example: if num is 2718
then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and
you stop at 9. 
*/

function AdditivePersistence(num) { 
  var string = num.toString().split(""),
      sum,
      counter = 0;
  
  if (num <= 9)
    return 0;
  while (string.length > 1) {
    sum = 0;
    string.forEach(function(number){sum += parseInt(number)});
    string = sum.toString().split("");
    counter ++;
  }
  return counter;
}

console.log(AdditivePersistence(99999998799));
/*
Input = 4 Output = 0
Input = 19 Output = 2
*/