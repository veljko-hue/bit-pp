
////////////////////////////////////////////////////////////////////----TASK 1-----------------------------------------------!

// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(a, b){
    for a[i]
}

function insertString(str1, str2, n) {
    var newStr = "";
    if (n === undefined) {
        newStr = str2 + str1;
    }
    for (var i = 0; i < str1.length; i++) {
        if (i === n) {
            newStr = newStr + str2;
        }
        newStr = newStr + str1[i];
    }
    return newStr;
}
var result = insertString("My random string", " JS ", );
console.log(result);


////////////////////////////////////////////////////////////////////----TASK 2

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
