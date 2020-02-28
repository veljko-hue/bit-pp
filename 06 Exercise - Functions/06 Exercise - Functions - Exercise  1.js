  
////////////////////////////////////////////////////////////////////----TASK 1
// Write a program that calculates the maximum of two given numbers. 


function sum(a, b) {
    var result = a + b;
    return result;
}

var res = sum(10, 5);

console.log(res);

//--------------------------------------------------------------

function multiple(a, b){
    var result = a * b;
    return result
}

var r = multiple(10, 5)

console.log(r);

//Write a program that concatenate two given strings.

function conc(a, b){
    var result = a + b;
    return result
}

var r = conc("10", "5")

console.log(r);



////////////////////////////////////////////////////////////////////----TASK 2
// Write a program that checks if a given number is odd.


function  odd(a){
    var res ="";
    if ( a % 2 === 0 ){
        res = "the number " + a + " is even";    
    }
    else {
        res = "the number " + a + " is odd";
    }

    return res
}

var n = odd(9)

console.log(n);



function odd(a) {
    var res = "";

    if (a % 2 !== 0) {
        res = a + " is odd";
    } else {
        res = a + " is even";
    }

    return res;
}

var res = odd(11)
console.log(res)



////////////////////////////////////////////////////////////////////----TASK 3
// Write a program that checks if a given number is a three digit long number.

//// forur digit

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


//// four digit

function four(n){
    var result = "";

    if ( n >= 1000 && n < 10000 ){
        result = "Yes";
    }
    else {
        result = "No";
    }
    return result;
}

var result = four(1244);
console.log(result);



//// five digit

function five(n){
    var result =""
    if( n >= 10000 && n < 100000 ){
        result = "Yes"
    }else{
        result = "No"
    }
    return result
}

var check = five(1234445)//----------------------------------------check
console.log(check);





////////////////////////////////////////////////////////////////////----TASK 4
// Write a program that calculates an arithmetic mean of four numbers.

function mean(a, b, c, d) {
    var sum = a + b + c + d;
    var result = sum / 4;
     
    return result
}

var check = mean(10, 15, 20, 25, 30)
console.log(check);



// function mean(a, b, c, d) {
//     var result = (a + b + c + d) / 4;
//     return result;
// }

// var res = mean(5, 7, 12, 20);
// console.log(res);



////////////////////////////////////////////////////////////////////----TASK 7
// Write a program that calculates a number of digits of a given number. 

function count(n){
    result =""
    for( var i = 0; i < n.length; i++){
        result = n.length;
    }

    return result
}

var check = count(12)
console.log(check);


var numb = 123;

for (var i = 0; numb >= 1; i++) {//--------------------------- why not numb > 0 ?
    numb = numb / 10;
}
if (numb >= 1) {
    i++;
}
console.log(i);

console.log(123/10);




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