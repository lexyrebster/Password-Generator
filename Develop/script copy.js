///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");
var password = {
  "passwordCharacters": === 8 || <== 128,
  "confirmLowercase": [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
  "confirmUppercase": [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  "confirmNumeric": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]
  "confirmSpecial": [
    "!", "@", "#", "$", "&", "*"
  ]
}
// Write password to the #password input
var passwordCharacters = prompt("How many characters would you like in your password? Please keep desired characters within 8-128.");
  if (password.passwordCharacters === 8, <== 128){
      writePassword();
    } 
    if (passwordCharacters < 8 ){
      alert("Please choose the length of your desired password between 8 - 128 characters.");
    } 
    if (passwordCharacters > 128){
      alert("Please choose the length of your desired password between 8 - 128 characters.");
    }
    else (passwordCharacters !== null){
      alert("Please choose the length of your desired password between 8 - 128 characters.");
    }
  var confirmLowercase = confirm("Would you like lowercase letters in your password?");
    if (confirmLowercase) {

    }
    else {
      (confirmUppercase)
    }
  var confirmUppercase = confirm("Would you like uppercase letters in your password?");
    if (confirmUppercase) {

    }
    else {

    }
  var confirmNumeric = confirm("Would you like numerical characters to be in of your password?");
    if {

    }
    else {
      
    }
  var confirmSpecial = confirm("Would you like special characters to be in your password?");

  var passwordText = document.querySelector("#password");

  function writePassword() {
    var password = generatePassword();
  passwordText.value = password;
}



   


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//////////////////////////////////////////////////////////////////////
