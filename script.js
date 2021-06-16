// Assignment Code


// Write password to the #password input

// create prompts for the criteria 

var PasswordLength = prompt(" Enter the number of characters within your password (Must be within 8-128) ")

if (PasswordLength > 128 || PasswordLength < 8) {
 var reattempt =  confirm(" Please enter a valid number! ")
}if (reattempt == true) {
  var PasswordLength = prompt(" Enter the number of characters within your password (Must be within 8-128) ")
}

var LowerCaseNecessity = confirm(" Would you like to use lowercase? ")

var UpperCaseNecessity = confirm(" Would you like to use uppercase? ")

var NumeralNecessity = confirm(" Will numerals be used? ")

var SpecailCharactersNecessity = confirm(" Will special characters be used? ")


//function that inputs text from the info recieved. generate a random number, a random letter, etc.

function Numeralcasegengen(length) {
  var Numeralcaseset = ' 0123456789 ';
  var result = '';
  for (var i = 0; i < length; index++) {
    result += Numeralcaseset.charAt(Math.floor(Math.random() * Numeralcaseset.length));
  }
  return result;
}

function Lowercasegengen(length) {
  var lowercaseset = ' abcdefghijklmnopqrstuvwxyz ';
  var result = '';
  for (var i = 0; i < length; index++) {
    result += lowercaseset.charAt(Math.floor(Math.random() * lowercaseset.length));
  }
  return result;
}

function Uppercasegengen(length) {
  var Uppercaseset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 0; i < length; index++) {
    result += Uppercaseset.charAt(Math.floor(Math.random() * Uppercaseset.length));
  }
  return result;
}

function SpecialCharactergengen(length) {
  var SpecialCharacterset = '!"#$%&()*+,-./:;<=>?@{|}^_{|}~`';
  var result = '';
  for (var i = 0; i < length; index++) {
    result += SpecialCharacterset.charAt(Math.floor(Math.random() * SpecialCharacterset.length));
  }
  return result;
}

// create function to record the answers to the prompts and generate characters and joing the answers together for the password. 
function PasswordPromptCheck() {
  if (LowerCaseNecessity) {
    Lowercasegengen();
  }
  if (UpperCaseNecessity) {
    Uppercasegengen();
  }
  if (SpecailCharactersNecessity) {
    SpecialCharactergengen();
  }
  if (NumeralNecessity) {
    Numeralcasegengen();
  }
 
}


// create a for loop to  
function GeneratePassword() {
  var result;
  for (var i = 0; i < PasswordLength; i++) {
  var PasswordPromptCheckr = Math.random(PasswordPromptCheck);
  result.push(PasswordPromptCheckr)
  return result;
}



var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);