////////////////////////////////////////////////////////////////////////////-TASK 1
// Write a conditional statement to find the sign of product of three numbers. 
// Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 

// result = "", a = 3, b = -7, c = 2;

// if ( a * b * c > 0 ) 
// {
//     result = "The sign is +"
// }
// else ( a * b * c < 0 )  
// {
//     result = "The sign is -"
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 2
// Write a conditional statement to find the largest of five numbers. 
// Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 

// var result ="", a = -5, b = -2, c = -6, d = 0, e = -1;

// if ( a > b && a > c && a && d && a > e ){
//     result = a; 
// } else if ( b > c && b > d && b > e ){
//     result = b;
// } else if ( c > d && c > e ){
//     result = c;
// } else if ( d > e ){
//     result = d
// } else {
//     result = e
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 3----------------------------------!?
// Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 


////////////////////////////////////////////////////////////////////////////-TASK 4
// Write a program to check if the variable is a number and if it’s a number, 
// check if it is divisible by 2. If it is, print the result, if not, show “X”
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  


// result = "", a = 10;

// if (typeof a === Number || a % 2 === 0 ){
//     result = a + " /2 " + a / 2; 
// }
// else {
//     result = "X"
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 5
// Write a program that compares two numbers and displays the larger. 
// Display the result in the console.

// result = "", a = 5, b = 2;

// if ( a > b ) {
//     result = a
// }

// else if ( b > a ) {
//     result = b; 
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 6
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F

// result = "", c = 60, f = (9*c/5) + 32;

// console.log(f);


////////////////////////////////////////////////////////////////////////////-TASK 7
// Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2			

// number = 100;
// b = number - 13; 
// result = "";

// if (  b  > 13 ){
//     result = b * 2;
// }
// else {
//     result = "";
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 8
// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17						Output : 48


// var result = "", a = 10, b = 10;

// if ( a = b ) {
//     result = ( a + b ) * 3;
// }
// else {
//     resilt = a + b;
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 9
// Write a JavaScript program to check two given numbers and print “true” if one of 
// the number is 50 or if their sum is 50.
// 	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// 	Output : -				Output : true				Output : true


// var result = "", a = 45, b = 6;

// if ( a === 50, b === 50 || a + b === 50 ){
//     result = "true";
// }
// else {
//     result = "-"
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 10
// Write a JavaScript program to check a given integer is within 20 of 100 or 400, 
// and print range in which number belongs.
// Sample Input: 13			Sample Input: 34			Sample Input: 256
// 	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400

// result = "",  a = 120;

// if ( 20 < a < 100 ){
//     result = "20 ⇔ 100";
// }
// else if ( 100 < a < 400 )
// {
//     result = "100 ⇔ 400";
// }

// else {
//     result = "-"
// }
// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 10 -- secod way

result = "",  a = 1;

if ( a >= 20 && a <=400 )
{
    if ( a <= 100 )
    { result = "20<=>100" }
    else 
    { result = "100<=>400"}
}   

else 
{ result = "-"}  

console.log(result);
