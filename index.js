function isPalindrome(word) {
  // Write your algorithm here
  //reverse the string and compare it to the original

  const reversedWord = word.split("").reverse().join("");
  console.log(`input: ${word}, reversed: ${reversedWord}`);
  return word === reversedWord;
}
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));

/* 
  Add your pseudocode here
  split the string into an array of characters
  reverse the array of characters
  join the array back into a string
  compare the reversed string with the original string
  return true if they are the same false otherwise
*/

/*
  Add written explanation of your solution here
    To determine if the string is a palindrome, 
    we reverse the string and compare it with the original. 
    If they match, the string reads the same forwards and backwards,
    making it a palindrome. if not, it is not a palindrome.
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
