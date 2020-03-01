// 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 2.Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

var alphabeticalOrder = function(str) {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
console.log(alphabeticalOrder('Webmaster'))

// 3.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// 4. Write a function to split a string and convert it into an array of words.

// "John Snow" -> [ 'John', 'Snow' ]
var splitAndConvertStr = function(str) {
  return str.split(' ')
}

console.log(splitAndConvertStr('john snow'))

var splitAndConvertStr = function(str) {
  return str.split(' ')
}
console.log(splitAndConvertStr('John Snow'))
// 5. Write a function to convert a string to its abbreviated form.

// "John Snow" -> 	"John S."
// 6.Write a function that adds string to the left or right of string, by replacing it’s characters.

// '0000', ‘123’, 'l' -> 0123
// '00000000', ‘123’, 'r' -> 12300000

// 7. Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// somerandomaddress@example.com" -> "somerand...@example.com"

// 9.Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
