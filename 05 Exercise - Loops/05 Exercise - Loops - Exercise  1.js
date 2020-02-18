



//  ////////////////////////////////////////////////////////////////////////////-TASK 0
// Write a program that will iterate from 0 to 10 and display squares of numbers.



// for ( var )

// var n = 1;
// var maxNumber = 10;

// while ( number <= maxNumber) {
//     console.log("number is: " + number);
//     var
// }


//  ////////////////////////////////////////////////////////////////////////////-TASK 1
//  Write a for loop that will iterate from 0 to 15. For each iteration,
// it will check if the current number is odd or even, and display a 
// message to the screen.


for ( let i=0; i<=15; i++ ){
    if(i%2===0){ 
        console.log( i +"The number is even");
    } else  {
        console.log (i +"The number is odd"); 
}
}

//  ////////////////////////////////////////////////////////////////////////////-TASK 2---------------------------------------?
// Write a program to sum the multiples of 3 and 5 under 1000.



for ( let i = 1; i <= 1000; i++ ){
    if( i%3 === 0 && i%5 === 0);
    {console.log( i );
     }
     
    
}

//  ////////////////////////////////////////////////////////////////////////////-TASK 3---------------------------------------?
// Write a program to compute the sum and product of an array of integers.


var result = 0;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


var result = 0;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var index = 0; index < array.length; index++) {

    result = result + array[index];
}

console.log(result);

//  ////////////////////////////////////////////////////////////////////////////-TAKS 4


//  ////////////////////////////////////////////////////////////////////////////-TASH 5
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
 

