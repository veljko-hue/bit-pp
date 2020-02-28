



//  ////////////////////////////////////////////////////////////////////////////-TASK 0
// Write a program that will iterate from 0 to 10 and display squares of numbers.



// for ( var )

// var n = 1;
// var maxNumber = 10;

// while ( number <= maxNumber) {
//     console.log("number is: " + number);
//     var
// }


for ( var i = 0; i <= 10; i++ ){
    console.log("number is: " + i );
    
}

for ( var i = 0; i <= 10; i++ ){
    console.log( i + " mulitple " + i + " is " + i*i );
    
}

for ( var i = 0; i <= 10; i++ ){
    console.log( i + " * " + i + " = " + i*i );
    
}

//  ////////////////////////////////////////////////////////////////////////////-TASK 1
//  Write a for loop that will iterate from 0 to 15. For each iteration,
// it will check if the current number is odd or even, and display a 
// message to the screen.


for ( let i=0; i<=15; i++ ){
    if(i%2===0){ 
        console.log( i +" The number is even");
    } else  {
        console.log (i +" The number is odd"); 
}
}

//  ////////////////////////////////////////////////////////////////////////////-TASK 2---------------------------------------?
// Write a program to sum the multiples of 3 and 5 under 1000.


var djole = 0
for ( let i = 1; i <= 1000; i++ ){
    // console.log('pre uslova', i );
    console.log( 'U PETLJI', djole );
    if( i%3 === 0 && i%5 === 0) {
        djole = djole + i
        console.log( 'u uslovu', djole );
     }
    }
    console.log( 'POSLE PEGLJE', djole );

var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);


//  ////////////////////////////////////////////////////////////////////////////-TASK 3---------------------------------------?
// Write a program to compute the sum and product of an array of integers.



var result = 0;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(array.length);

for (var index = 0; index < array.length; index++) {

    result = result + array[index];
}

console.log(result);


var arr = [1, 6, 8, 9, 5, 15];
var sum = 0;
var product = 1;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    product = product * arr[i];
}
console.log(sum, product);




//  ////////////////////////////////////////////////////////////////////////////-TAKS 4
// Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var str = ""

for(var i = 0; i < x.length; i++){
    str = str + x[i]
}

console.log(str);



//  ////////////////////////////////////////////////////////////////////////////-TASK 5
// Write a program that prints the elements of the following array.
//-------------------------------------------------------------------------------------
var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '\n';
for (var i in a) {
 result += 'index: ' + i + ', value: ' + a[i] + '\n';
}
console.log(result);
//-------------------------------------------------------------------------------------


var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var res = ""


                                                          
for ( i = 0; i < a.length; i++ ){
    for(n=0; n < a[i].length; n++ ){  //Don't use the same name for variables for "for" inside the "for" loop.
        res += a[i][n] + "\t";     //Variable inside the second "for" is always backed to it's original value, which is 0 in this case
    }
 res += "\n"
} console.log(res);
//------------------------------------------------------------------------------------

var a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]
];

for( i=0; i<a.length; i++){
    for(j=0; j<a[i].length; j++ ){
        console.log(a[i][j]);
        
    }
}
 

var result = 0;

for (var number = 1; number < 1000; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        result = result + number;
    }
}
console.log(result)


//  ////////////////////////////////////////////////////////////////////////////-TASK 6
// Write a program that outputs the sum of squares of the first 20 numbers. 


var sum = 0;
for (var i = 0; i <= 20; i++) {
    sum = sum + i * i;
}
console.log(sum);


for (var i = 0; i <= 20; i++) {
    console.log(i * i);
}

for (var i = 0; i <= 20; i++) {
    console.log(i + " * " + i + " = " + i * i)
}

//  ////////////////////////////////////////////////////////////////////////////-TASK 7
// Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
// David
// 80
// Marko
// 77
// Dany
// 88
// John
// 95
// Thomas
// 68

// The grades are computed as follows :

// < 60%
// F
// < 70%
// D
// < 80%
// C
// < 90%
// B
// < 100%
// A


var marks = [80, 77, 88, 95, 68];
var sum = 0

for (var i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

console.log(sum);



var average = sum / marks.length;
var grade = ""

if (average > 90 ) {
    grade = "A";
} else if ( average > 80 && average < 90 ){
    grade = "B";
} else if ( average > 70 && average < 80 ){
    grade = "C";
} else if ( average > 60 && average < 70 ){
    grade = "D";
} else {
    grade = "F"
}


console.log(grade);

//  ////////////////////////////////////////////////////////////////////////////-TASK 8
// Write a program that uses console.log to print all the numbers from 1 to 100, 
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, 
// modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// Note: This is actually an interview question that has been claimed to weed out a significant
//  percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.



for (var i = 1; i <=100; i++){
    if (i % 3 === 0 ){
        console.log("Fizz");
        } if ( i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz");
            }
         if ( i % 5 === 0 && i % 3 ===0){
             console.log("FIZZ");
             
         }
         
            else{
             console.log(i);
         }
}
//--------------------------------------------------------------------------first part

for (var i = 1; i <=100; i++){
    if (i % 3 === 0 ){
        console.log("Fizz")
    }
    else if ( i % 5 === 0 && i % 3 !==0 ){
        console.log("Buzz");
    }  
    else{ console.log(i);
    }
}

//--------------------------------------------------------------------------second part

for (var i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 !==0 ){
        console.log("Fizz")
    }
  