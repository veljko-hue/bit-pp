////////////////////////////////////////////////////////////////////----TASK 1-----------------------------------------------!

// Write a program to insert a string within a string at a

// particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(str1, str2, n) {
  var newStr = ''
  if (n === undefined) {
    newStr = str2 + str1
    return newStr
  }
  for (var i = 0; i < str1.length; i++) {
    if (i === n) {
      newStr = newStr + str2
    }
    newStr = newStr + str1[i]
  }
  return newStr
}
var result = insertString('My random string', ' JS ', 8)
console.log(result)

////////////////////////////////////////////////////////////////////----TASK 2

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinAll(a) {
  var result = ''

  for (var i = 0; i < a.length; i++) {
    if (
      a[i] === undefined ||
      a[i] === null ||
      isNaN(a[i]) ||
      a[i] === Infinity
    ) {
      continue
    }
    result += a[i]
  }
  return result
}
var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

console.log(joinAll(a))

////////////////////////////////////////////////////////////////////----TASK 3
// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filter(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      console.log('value is tru', a[i])
    } else {
      console.log('value is false', a[i])
    }
  }
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

filter(a)

function filter(a) {
  for (var i = 0; i < a.length; i++) {
    if (!a[i]) {
      console.log('value is false', a[i])
    } else {
      console.log('value is tru', a[i])
    }
  }
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

filter(a)

function filter(a) {
  var fa = []
  for (var i = 0; i < a.length; i++) {
    if (!a[i]) {
      continue
    } else {
      fa[fa.length] = a[i]
    }
  }
  return fa
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

console.log(filter(a))

////////////////////////////////////////////////////////////////////----TASK 4
// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

function inverse(a) {
  var b = ''

  for (var i = 1; i <= a.length; i++) {
    // console.log(a[a.length - i], i, a.length)
    console.log(b)
    b = b + a[a.length - i]
    // console.log(b)
  }
  console.log(b)

  b = parseInt(b)
  return b
}

var a = '123456789'

console.log(inverse(a))

////////////////////////////////////////////////////////////////////----TASK 5
// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

////////////////////////////////////////////////////////////////////----TASK 6
// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function arrayRepeat(repeat, element) {
  var newArray = []
  if (element === undefined) {
    element = null
  }
  for (var i = 0; i < repeat; i++) {
    newArray[newArray.length] = element
  }
  return newArray
}

var result = arrayRepeat(10)
console.log(result)

////////////////////////////////////////////////////////////////////----TASK 7
// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer
// that is equal to the sum of its proper positive divisors, that is, the sum of its positive
//  divisors excluding the number itself (also known as its aliquot sum). Equivalently,
//   a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
//  Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6.
//   The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

////////////////////////////////////////////////////////////////////----TASK 8
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function findWord(sentence, word) {
  var tempWord = ''
  var count = 0
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      tempWord = ''
    } else {
      tempWord += sentence[i]
      if (tempWord === word) {
        count++
      }
    }
  }
  return word + ' was found ' + count + ' times'
}

var sentence = 'the quick brown fox'
var word = 'fox'
console.log(findWord(sentence, word))
////////////////////////////////////////////////////////////////////----TASK 9
// Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(email) {
  var hiddenEmail = ''
  var emailIndicator = false
  for (var i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      emailIndicator = true
      hiddenEmail += '...'
    }

    if (i < 3 || emailIndicator) {
      hiddenEmail += email[i]
    }
  }
  return hiddenEmail
}

var email = 'myemailaddress@bgit.rs'
console.log(hideEmail(email))

////////////////////////////////////////////////////////////////////----TASK 10
// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
