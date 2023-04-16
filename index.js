function isPalindrome(word) {
  // Write your algorithm here
  
  const y=Math.floor(word.length/2);
  for(let x=0,j=(word.length-1) ;x<=y&&j>=y;x++,j--){
   
      if(word[x]===word[j]||x===(y+1)){
       return word[x]===word[j] ;
      }else{
        return word[x]===word[j];
      }
  }
}
isPalindrome("robot")

/* 
  Add your pseudocode here
 divide word into two to provide end point
 iterate through each letter checking the condition
 return result of checking condition whether true or false
*/

/*
  Add written explanation of your solution here
   divide the word into two sections to give the conition an end point
  declare a starting point for each variable and the conditions to be checked then increment
  check to see if the conditions are met then return the result whether word is palindrom or not
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
