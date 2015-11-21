/*
Time Convert

Using the JavaScript language, have the function TimeConvert(num) take the num 
parameter being passed and return the number of hours and minutesthe parameter converts 
to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and 
minutes with a colon. 
*/

function TimeConvert(num) { 
	var hours = 0;
  	
	while (num >= 60) {	// loop over the num until it's less than 60
    	hours += 1;		// add 1 to hour each iteration	
      	num -= 60;	// remove 60 from num each iteration to eventually break the loop
    }
 return hours + ":" + num;	// return the values to the console
}

console.log(TimeConvert(126));
/*
Input = 126  Output = "2:6"
Input = 45   Output = "0:45"
*/