////////////////////////////////////////////////////////////////////////////-TASK 1
// // Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no


//-----------------------------------------------
var e = 3, a = [5, -4.2, 3, 7]

console.log( typeof a);                 ///object

//-----------------------------------------------

var e = 3, a = [5, -4.2, 3, 7];

for ( var i = 0; i < a.length; i++ ){
    if (a[i] === 3){
        console.log("yes");    
    
    }
}

////////////////////////////////////////////////////////////////////////////-TASK 2
// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var array = [-3, 11, 5, 3.4, -8];
var arr =[]

for ( var i = 0; i < array.length; i++ ){
    if (array[i] > 0){
        arr[i] = array[i] *2;
    } else {
        arr[i] = array[i];
    }
   
}

console.log(arr);


////////////////////////////////////////////////////////////////////////////-TASK 3
// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array = [4, 2, 2, -1, 6];
var out = ""

for ( var i; i < array.length; i++ ){
    if 
}

// var arr = [4, 2, 2, -1, 6];
// var index = 0;
// var min = arr[index];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         index = i;
//     }
// }
// console.log(index, min);


////////////////////////////////////////////////////////////////////////////-TASK 4
// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2