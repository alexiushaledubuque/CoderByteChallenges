/*
Dash Insert
Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between 
each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number.
*/

function DashInsert(str) { 
  var str2 = str.toString().split("");    //convert the string to an array for easier iteration
  var results = "";

  for (var i = str2.length - 1; i >= 0; i--){   // iterate over the array from the end
    if (results == ""){
    results += str2[i];
    }
    else if (str2[i] % 2 != 0 && str2[i + 1] % 2 != 0){   // when current number is not divisible by 2, also the number prior then insert an - if both true
      results = str2[i] + "-" + results;
    }
    else{
      results = str2[i] + results;
    }
  } 
  return results;           //return the results in order to display to the console
}

console.log(DashInsert(56730)); 

/*  Test Cases
Input = 99946 Output = 9-9-946
Input = 56730 Output = 567-30
*/