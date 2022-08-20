function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase();
  let rev = word.split("").reverse().join("");
  return rev === word ? true : false;
}

/* 
  Add your pseudocode here
  word.tolowercase
  rev = reverseString(word)
  if rev === word then true else false
*/

/*
  Add written explanation of your solution here
  recive word.
  lowercase the word
  var to store reverse of word
  equality op to return true or false
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
