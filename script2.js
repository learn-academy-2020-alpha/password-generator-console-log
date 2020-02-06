
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Create function called generatePassword

var passwordLength= prompt ("Choose a number between 8 and 128")
    if (typeof passwordLength === "number" && passwordLength > 128 || passwordLength < 8 ){
//
// if conditions are met log information for pasword generator, otherwise

} else {alert ("Please enter a valid number")}

var answer = []

var lowerCase = confirm ("Do you want lower case letters")
console.log(lowerCase);
var upperCase = confirm ("Do you want upper case letters")
console.log(upperCase);
var passwordNum = confirm ("Do you want numbers")
console.log(passwordNum);
var specialChar = confirm ("Do you want special characaters")
console.log(specialChar);
var numArry = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var specialArray = ["!","@","#","$","%","?","&"]

const generatePassword = () => {
    for (let i = 0; i < passwordLength.length; i++) {
        if (lowerCase = true && upperCase = true && passwordNum = true && specialChar = true) {

        } else if (lowerCase = false && upperCase = true && passwordNum = true && specialChar = true) {

        } else if (lowerCase = false && upperCase = false && passwordNum = true && specialChar = true) {

        } else if (lowerCase = false && upperCase = false && passwordNum = false && specialChar = true) {

        }
    }
Math.floor(Math.random(1) * Math.floor(10))
// prompt user for a number between 8-128
// make sure it is a number
// make sure it is between 8-128
// confirm if user wants lower case letters
// confirm if user wants upercase letters
// confirm if user wants numbers
// confirm if user wants special characters
// create an array of numbers
// create an array of letters
// create an array for special characters
// randomly pick characters from arrays to put into a string
//

// let capital = confirm ("Do you want your password to contain capitalized letters?");
// if (capital = true) {
//
// }
//
//
// const generateNum = (amount) => {
//     var randomNum = Math.floor(Math.random(1) * Math.floor(10))
// }
