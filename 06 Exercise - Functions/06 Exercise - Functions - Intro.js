////////////////////////////////////////////////////////////////////----TASK 1
// Write a program that calculates the maximum of two given numbers. 


// function sum(a, b) {
//     var result = a + b;
//     return result;
// }

// var res = sum(10, 5);

// console.log(res);




////////////////////////////////////////////////////////////////////----TASK 2
// Write a program that checks if a given number is odd.

// function odd(a) {
//     var res = "";

//     if (a % 2 !== 0) {
//         res = a + " is odd";
//     } else {
//         res = a + " is even";
//     }

//     return res;
// }

// var res = odd(11)
// console.log(res)





////////////////////////////////////////////////////////////////////----TASK 3
// Write a program that checks if a given number is a three digit long number.

// function number(a) {
//     var res = "";

//     if (a > 99 && a < 1000) {
//         res = "yes"
//     } else {
//         res = "no"
//     }
//     return res;
// }

// var res = number(200)
// console.log(res);




////////////////////////////////////////////////////////////////////----TASK 4
// Write a program that calculates an arithmetic mean of four numbers.

// function mean(a, b, c, d) {
//     var result = (a + b + c + d) / 4;
//     return result;
// }

// var res = mean(5, 7, 12, 20);
// console.log(res);

////////////////////////////////////////////////////////////////////----TASK 8
// Write a program that calculates a number of appearances of a 
// given number in a given array.
function broj(numbers, value) {
    var res = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            res += 1;
        }
    }

    return res;
}

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

var finalResult = broj(a, e);
console.log(finalResult)






////////////////////////////////////////////////////////////////////----TASK 9

