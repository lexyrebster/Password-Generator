
//PseudoCode Password generator

//1 Choise of length and characher of psswrd
//2 user select characters
//3 the system receives the input
//4 system stores the infor
//5 generates random password
//6 display password 


// Global Variables
var generateBtn = document.querySelector("#generate");
var userChar = [];
var userPassword = [];

//arrays of characthers data
var numChar = "0123456789";
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generate() {

  var length = prompt("How many characters would you like your password to be? Please choose between 8-128 characters.");
  console.log(length);

  var numbers = confirm("Would you like numerical characters to be included in your password?");
  if (numbers === true) {
    userChar.push(...numbers);
  }
  console.log(userChar)

  var lower = confirm("Would you like lowercase characters to be included in your password?");
  if (lower === true) {
    userChar.push(...lower);
  }
  console.log(userChar)

  var upper = confirm("Would you like uppercase characters to be included in your password?");
  if (upper === true) {
    userChar.push(...upper);
  }
  console.log(userChar)

  var special = confirm("Would you like special characters to be included in your password");
  if (special === true) {
    userChar.push(...special);
  }
  console.log(userChar)

  // for loop to generate the password
  
  for( var i = 0; i < length; i++) {
    userPassword.push(userChar[Math.floor(Math.random() * userChar.length)]);
    console.log(userPassword.join("+"));
  }
  
  // actually generate password
  function writePassword() {
    var password = generatePassword();
  passwordText.value = password;
}

// click options
  document.getElementById("password").value = userPassword.join("+");
  generateBtn.addEventListener("click", writePassword);


}



