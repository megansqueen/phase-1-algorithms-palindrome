function isPalindrome(word) {
  const len = word.length
  for(let i = 0; i<len/2; i++) {
    if (word[i] !== word[len-1-i]) {
      return false
    }
  }
  return true
}

const word = "madam"

/* 
function with a title that makes sense
  in function create a number variable for the length of a string
  open a for loop that loops through half of the string
  checl if the first and last string are the same

  create a variable for the input

  create a variable calling the function

*/

/*
  Create a function within a program that identifies whether a word entered is a palindrome or not and returns true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
