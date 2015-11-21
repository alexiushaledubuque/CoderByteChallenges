/*
Longest Word

Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. If there are two or more words that are the same length, return the 
first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) {
 	sen = sen.match(/\w+/g),curr = "", prev = "", longest = ""; // match only letters & store in an array
  
	for(var i = 0, e = sen.length; i < e; i++){		// iterate over the array 
		if (sen[i].length > longest.length){		// test the word length against the previous longest word
			longest = sen[i];
        }
    }
	return longest;				// return the longest word to the console
} 
 
console.log(LongestWord("I just want to have a fun&!! &&time@!!"));
  
/*
Input = "fun&!! time" Output = "time"
Input = "I love dogs" Output = "love"
*/