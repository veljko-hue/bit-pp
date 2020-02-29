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
var result = insertString('My random string', ' JS ', 5)
console.log(result)

////////////////////////////////////////////////////////////////////----TASK 2

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinAll(a) {
  var result = ''
  for (var i = 0; i < a.length; i++) {
    if (
      array[i] === undefined ||
      array[i] === null ||
      isNaN(array[i]) ||
      array[i] === Infinity
    ) {
      continue
    }
    result += a[i]
  }
  return result
}
var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

console.log(joinAll(a))

function joinAll(array) {
  var result = ''
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === undefined ||
      array[i] === null ||
      isNaN(array[i]) ||
      array[i] === Infinity
    ) {
      continue
    }
    result += array[i]
  }
  return result
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]

console.log(joinAll(a))

////////////////////////////////////////////////////////////////////----TASK 3
