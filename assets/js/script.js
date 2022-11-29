// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//declare variables
var passLength = 0; // default value
var userLower = false; // default value
var userUpper = false; // default value
var userNumeric = false; // default value
var userSpecial = false; // default value
var passwordArr = []; // default value
var password = ""; // default value
// Function to prompt user for password options
function getPasswordOptions() {
  var userChoseLength = prompt(
    "How long do you want your password to be? 10-64"
  );
  passLength = userChoseLength;
  var isLower = confirm("Do you want lowercase?");
  userLower = isLower;
  var isUpper = confirm("Do you want UPPERCASE?");
  userUpper = isUpper;
  var isNumbers = confirm("Do you want numbers?");
  userNumeric = isNumbers;
  var isSpecial = confirm("Do you want special characters?");
  userSpecial = isSpecial;
}

getPasswordOptions();
choices();

function choices() {
  if (userLower) {
    // based on choices , arrays will be pushed on one passwordArr array
    passwordArr.push(lowerCasedCharacters);
  }
  if (userUpper) {
    passwordArr.push(upperCasedCharacters);
  }
  if (userSpecial) {
    passwordArr.push(specialCharacters);
  }
  if (userNumeric) {
    passwordArr.push(numericCharacters);
  }
}
// string passwordArr , replace ',' with empty space
let passwordStr = passwordArr.toString().replaceAll(",", "");

// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordStr.length);
    password += passwordStr.substring(randomNum, randomNum + 1);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (passwordText.value) {
    generateBtn.disabled = true;
  }
  if (passLength < 10 || passLength > 64) {
    generateBtn.disabled = true;
    alert("Please reload the page and select between 10 and 64 characters");
    passwordText.value = null;
  }
  if (!userLower && !userUpper && !userSpecial && !userNumeric) {
    generateBtn.disabled = true;
    alert("Please reload the page and select atleast one character type");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
