// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
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
var userLength = 0;
var userLower = false; // default value
var userUpper = false; // default value
var userNumeric = false;
var userSpecial = false;
var userPasswordArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var userChoseLength = prompt(
    "How long do you want your password to be? 10-64"
  );
  userLength = userChoseLength;
  var isLower = confirm("Do you want lowercase?");
  userLower = isLower;
  var isUpper = confirm("Do you want UPPERCASE?");
  userUpper = isUpper;
  var isNumbers = confirm("Do you want numbers?");
  userNumeric = isNumbers;
  var isSpecial = confirm("Do you want special characters?");
  userSpecial = isSpecial;
  generatePassword();
  // console.log(userSpecial);
  // console.log(userNumeric);
  // console.log(userUpper);
  // console.log(userLower);
  // console.log(userLength);
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var randomArrElement = arr[Math.floor(Math.random() * arr.length)];
  // console.log(randomArrElement);
  return randomArrElement;
}

// Function to generate password with user input
function generatePassword() {
  if (userLower) {
    // console.log(getRandom(lowerCasedCharacters));
    userPasswordArr.push(getRandom(lowerCasedCharacters));
  }
  if (userUpper) {
    userPasswordArr.push(getRandom(upperCasedCharacters));
  }
  if (userSpecial) {
    userPasswordArr.push(getRandom(specialCharacters));
  }
  if (userNumeric) {
    userPasswordArr.push(getRandom(numericCharacters));
  }
  if (!userLower && !userUpper && !userSpecial && !userNumeric) {
    alert("Please select atleast one character type.");
  }
}

console.log(userPasswordArr);

// generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
