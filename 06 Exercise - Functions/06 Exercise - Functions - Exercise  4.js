// 1.Write a program that checks if a given element e is in the array a.
// Input:  Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]

function checks(a, n) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === n) {
      return 'yes'
    }
  }
  return 'no'
}

var a = [5, -4.2, 3, 7]
var n = 3
console.log(checks(a, n))

//2.Write a program that multiplies every positive element of a given array by 2.
//Input array: [-3, 11, 5, 3.4, -8]
//Output array: [-3, 22, 10, 6.8, -8]

function multiplies(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      a[i] = a[i] * 2
    }
  }
  return a
}

var a = [-3, 11, 5, 3.4, -8]

console.log(multiplies(a))

//3. Write a program that finds the minimum of a given array and prints out its value and index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3

function minimumOfArray(a) {
  var min = a[0]
  var index = 0
  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i]
      index = i
    }
  }
  return [min, index]
}

var a = [4, 2, 2, -1, 6]
console.log(minimumOfArray(a))

//4.Write a program that finds the second smallest number and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

function secondSmallest(a) {
  var min = a[0]
  var min2 = a[0]
  var index = 0
  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min2 = min
      min = a[i]
    } else if (a[i] < min2) {
      min2 = a[i]
    }
  }
  return min2
}

var a = [4, 2, 2, -1, 6, 1, 0]
console.log(secondSmallest(a))

//5.Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16

function sum(a) {
  var sum = 0
  for (var i = 0; i < a.length; i++)
    if (a[i] > 0) {
      sum += a[i]
    }
  return sum
}

var a = [3, 11, -5, -3, 2]

console.log(sum(a))

//6.Write a program that checks if a given array is symmetric.
//An array is symmetric if it can be read the same way both from the left and the right hand side.
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.

function isSymmetric(a) {
  for (var i = 0; (j = a.length - 1); i < a.length, i++, j--) {
    if (a[i] !== a[j]) {
      return "The array isn't symmetric"
    }
  }
  return 'The array is symmetric'
}

var a = [2, 4, -2, 7, -2, 4, 2]
console.log(isSymmetric(a))

//7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwinesA(a1, a2) {
  var res = []
  for (var i = 0; i < a1.length; i++) {
    res[res.length] = a[i]
    res[res.length] = a2[i]
  }
  return res
}

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
console.log(intertwinesA(a, b))

//8.Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9]

//9.Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

function deleteAnElement(element, array) {
  var res = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      continue
    } else {
      res[res.length] = array[i]
    }
  }
  return res
}

var a = [4, 6, 2, 8, 2, 2]
var e = 2
console.log(deleteAnElement(e, a))

//10.Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]
