/*
Fizz Buzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).
*/

function FizzBuzz(num){
for (var i = 1; i <= num; i++){
    var results = "";
      if (i%3 == 0){
        results += "Fizz";	//if the number evenly divides into 3, append Fizz to the string
        }   
      if (i%5 == 0){
        results += "Buzz";	//if the number evenly divides into 5, append Fizz to the string
        }
      console.log(results||i);	//print to the console either the value of results or the number
    }
}
FizzBuzz(15);