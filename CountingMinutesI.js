/*
Counting Minutes

Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter 
being passed which will be two times (each properly formatted with a colon and am or pm) separated 
by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. 
For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
*/

function CountingMinutesI(str) { 
  var array = str.split("-");   // convert string into an array to process each time individually
  var elapsed = 0, time1, time2;
  
  //convert times to minutes
  time1 = cv_to_mins(array[0]); // call helper function to convert the 1st time to minutes
  time2 = cv_to_mins(array[1]); // call helper function to convert the 2nd time to minutes
  
  //compute time elapsed
  if (time2 > time1)
    elapsed = time2 - time1;
  else if (time1 > time2) {
    elapsed = (1440 - time1) + time2;
  }
  
  return elapsed;               // return time to console
}

function cv_to_mins(string){
  //set values
  var hrs_mins = string.match(/\d+/g);    // creates an array with 2 integer values: hour and minutes
  var ampm = string.match(/[a-z]+/g);     // creates an array with 2 string values: am and pm in given combination
  var minutes = 0;
  
  if (ampm == "am" && hrs_mins[0] == 12 && hrs_mins[1] == 0) {    // Midnight is the greatest number of minutes 1440
    minutes = 1440;
  }
  else if (ampm == "am" && hrs_mins[0] == 12 && hrs_mins[1] > 0) {  //Only count the minutes if the time is after Midnight since time has restarted from 0
    minutes = parseInt(hrs_mins[1]);
  }
  else if (ampm == "am" && hrs_mins[0] <= 12){                    // Morning hours are just multiplied by 60 minutes then add the remaining minutes
    minutes = ((hrs_mins[0] * 60) + parseInt(hrs_mins[1]));
  }
  else if (ampm == "pm" && hrs_mins[0] == 12 && hrs_mins[1] == 0) {   // Noon is 1/2 of Midnight minutes 720
    minutes = 720;
  }
  else if (ampm == "pm" && hrs_mins[0] < 12) {
    minutes = ((hrs_mins[0] * 60) + parseInt(hrs_mins[1]) + 720);     // After 12 (noon), multiply hours by 60 minutes, add 720 minutes elapsed then add the remaining minutes 
  }  
  else if (ampm == "pm" && hrs_mins[0] == 12 && hrs_mins[1] > 0) {    // After 12 (noon), multiply hours by 60, add minutes and add 720 for minutes elasped.
  }  
  return minutes;         // return the minutes to display to the console
}
                    
console.log(CountingMinutesI("12:30pm-12:00am"));

/*    Test Cases
"12:30pm-12:00am" Output = 690
"1:23am-1:08am" Output = 1425
"9:00am-10:00am" Output - 60
"1:00pm-11:00am" Output - 1320 
*/
