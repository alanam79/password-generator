// Assignment code here
function generatePassword() {
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbol = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var special = [];


  // create the length of characters for password
  howManyCharacters = window.prompt("How many characters do you want in your password? Choose between 8-128 characters");
    if (howManyCharacters < 8 || howManyCharacters > 128) {
      alert("You must choose between 8-128 characters!");
      return;
    }  
    if (howManyCharacters === "" || howManyCharacters === null) {
      alert("Please enter a valid number.");
      // use return to call it again and stop the rest of this function from running
      return;
    }
    else {
      alert("Your password will be " + howManyCharacters + " characters long.");
    }
  useLowerCase = confirm("Do you want to use lowercase characters?");
    if (useLowerCase) {
      alert("Your password will have lowercase characters.");
    }    
    else {
      alert("Your password will not have lowercase characters.");
    }
  useUpperCase = confirm("Do you want to use uppercase characters?");
    if (useUpperCase) {
      alert("Your password will have uppercase characters");
    }
    else {
      alert("your password will not have uppercase characters.");
    }
  useNumber = confirm("Do you want to use a number?");
    if (useNumber) {
      alert("Your password will have a number.");
    }
    else {
      alert("Your password will not have a number.");
    }
  useSymbol = confirm("Do you want to use a symbol?");
    if (useSymbol) {
      alert("Your password will have a symbol.");
    }
    else {
      alert("Your password will not have a symbol.");
    }
    if (useLowerCase === false && useUpperCase === false && useNumber === false && useSymbol === false) {
      window.alert("Please select at least one character.");
      return;
    }


    // group selected characters
  if (useLowerCase) {
    special = special.concat(lowerCase);
  }
  if (useUpperCase) {
    special = special.concat(upperCase);
  }
  if (useNumber) {
    special = special.concat(number);
  }
  if (useSymbol) {
    special = special.concat(symbol);
  }

  // pick password
  let finalPassword = ""
  for (let i = 0; i < howManyCharacters; i++) {
    let rng =[Math.floor(Math.random() * special.length)];
    // or finalPassword += special[rng];
    finalPassword += special[rng];
  }
  localStorage.setItem('password', finalPassword)
   localStorage.getItem('password')
  return finalPassword;  
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
