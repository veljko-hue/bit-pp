////////////////////////////////////////////////////////////////////----TASK 1
// Write a function to check whether the `input` is a string or not.

function isString(a) {
  if (typeof a === 'string') {
    return 'true'
  } else {
    return 'false'
  }
}
var res = isString(12)

console.log(res)

////////////////////////////////////////////////////////////////////----TASK 2
// Write a function to check whether a string is blank or not.

// function blankOrNot(a) {
//     if (a === "") { //////////////////////////////////////////-- posle uslova uvek idu viticaste zagrade
//         return "true";
//     }
//     else {
//         return "false";
//     }
// }

// var res = blankOrNot("");

// console.log(res)

////////////////////////////////////////////////////////////////////----TASK 3
// Write a function that concatenates a given string n times (default is 1).

function conc(a, stagod) {
  var res = ''
  for (let i = 0; i < a; i++) {
    res += stagod //res=res+string;
  }
  return res
}

console.log(conc(5, '-AHA-'))

////////////////////////////////////////////////////////////////////----TASK 4
// Write a function to count the number of letter occurrences in a string.

// function letter(t, s) {
//     var count = 0
//     for (let i = 0; i < t.length; i++) {
//         if (s === t[i]) {
//             count = count + 1;    //moze i skraceno samo count++
//         }
//     }
//     return count;
// }

// console.log(letter("abrakadabra dabre", "r"));

////////////////////////////////////////////////////////////////////----TASK 5
// Write a function to find the position of the first occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character,
// the function should return -1.

function letter(t, s) {
  for (let i = 0; i < t.length; i++) {
    if (s === t[i]) {
      return i + 1
    }
  }
  return i
}

console.log(letter('HelloWorld', 'l'))

////////////////////////////////////////////////////////////////////----TASK 6
// Write a function to find the position of the last occurrence of a character
// in a string. The result should be in human numeration form. If there are no
//  occurrences of the character, function should return -1.

function lastletter(t, s) {
  var pom = 0
  for (let i = 0; i < t.length; i++) {
    if (s === t[i]) {
      pom = i + 1
    }
  }
  return pom
}

console.log(lastletter('HelloWorld', 'd'))
////////////////////////////////////////////////////////////////////----TASK 7
// Write a function to convert string into an array. Space in a string should
// be represented as “null” in new array.

// function convert(t) {
//     var a = [];
//     for (var i = 0; i < t.length; i++) {
//         if (t[i] !== " ") {
//             a[i] = t[i];
//         } else {
//             a[i] = null;
//         }
//     }
//     return a;
// }
// console.log(convert("djes ba sta rais"));
//////////////////////////////////////////////////////////////////----TASK 8

// Write a function that accepts a number as a parameter and checks if
// the number is prime or not. Note: A prime number (or a prime) is a natural
// number greater than 1 that has no positive divisors other than 1 and itself.

function prime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return n + ' is not prime number'
    }
  }
  return n + ' is prime number'
}

console.log(prime(19))

//////////////////////////////////////////////////////////////////----TASK 9
// Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.

function replace(text, char) {
  var s = ''

  if (typeof char === 'undefined') {
    char = '-'
  }

  for (var i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      s += char
    } else {
      s += text[i]
    }
  }
  return s
}
console.log(replace('My random string'))

//////////////////////////////////////////////////////////////////----TASK 10
// Write a function to get the first n characters and add “...” at the end of newly created string.

function getFirstNAdd(string, number) {
  var res = ''
  for (var i = 0; i < number; i++) {
    res += string[i]
  }
  res += '...'
  return res
}

var a = 'My random string'
var n = 5

console.log(getFirstNAdd(a, n))

//////////////////////////////////////////////////////////////////----TASK 11
// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function filter(array) {
  var farray = []
  for (i = 0; i < array.length; i++) {
    if (array[i] === Number) {
      array[array.length] = parseFloat(farray[i])
    }
    return farray
  }
}

var a = ['1', '21', undefined, '42', '1e+3', Infinity]

function arrayStringToNumbers(array) {
  var res = []
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] !== undefined &&
      array[i] !== NaN &&
      array[i] !== Infinity &&
      !isNaN(parseFloat(a[i]))
    ) {
      res[res.length] = parseFloat(array[i])
    }
  }
  return res
}

var a = ['1', '21', undefined, '42', '1e+3', Infinity, 'string']

console.log(arrayStringToNumbers(a))

console.log(filter(a))

//////////////////////////////////////////////////////////////////----TASK 12

// Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60.
// If someone is already retired, a proper message should be displayed.

function untilRetirement(number, gender) {
  if (gender === 'm') {
    if (number + 65 > 2020) {
      return number + 65 - 2020
    } else {
      return 'Already retired'
    }
  } else if (gender === 'f') {
    if (number + 60 > 2020) {
      return number + 60 - 2020
    }
  } else {
    return 'Please select m or f for gender'
  }
}

var yearOfBirth = 1999
var gender = 'f'

console.log(untilRetirement(yearOfBirth, gender))

//////////////////////////////////////////////////////////////////----TASK 13
// Write a function to humanize a number (formats a number to a human-readable string)
// with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function formatNumber(number) {
  if (number === 1) {
    return '1st'
  } else if (number === 2) {
    return '2nd'
  } else if (number === 3) {
    return '3rd'
  } else if (number >= 4 && number < 21) {
    return number + 'th'
  } else if (number > 20) {
    var string = number + ''
    if (string[string.length - 1] === '0') {
      return number + 'th'
    } else if (string[string.length - 1] === '1') {
      return number + 'st'
    } else if (string[string.length - 1] === '2') {
      return number + 'nd'
    } else if (string[string.length - 1] === '3') {
      return number + 'rd'
    } else if (string[string.length - 1] >= '4') {
      return number + 'th'
    }
  }
}
var number = 203
console.log(formatNumber(number))
