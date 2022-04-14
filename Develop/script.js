// Assignment code here
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-="


  // create the length of characters for password
  howManyCharacters = window.prompt("How many characters do you want in your password? Choose between 8-128 characters");
    if (howManyCharacters < 8 || howManyCharacters > 128) {
      alert("You must choose between 8-128 characters!");
      return howManyCharacters()
    }  
    if (howManyCharacters === "" || howManyCharacters === null) {
      alert("Please enter a valid number.");
      // use return to call it again and stop the rest of this function from running
      return howManyCharacters()
    }
    else {
      alert("Your password will be " + howManyCharacters + " characters long.");
    }
    
};    

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
