// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


function duplicate(array){
var newArray = [];
for (var i = 0; i<array.length; i++){
    newArray.push(array[i]);
    newArray.push(array[i]);
}
return newArray;
}

var result = duplicate([2, 4, 7, 11, -2, 1])
console.log(result)


// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 


function delite(array){
    var newArray =[];
    for (var i = 0; i<array.length; i++){
       if (newArray.indexOf(array[i]) === -1) {
             newArr.push(arr[i])
       }
    }

return newArray.sort(function(a,b){return a-b} )

}

// 3Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

var isOdd = function (arr){
    if(arr.length % 2 === 0){
        return true;

    }else {
        return false
    }
}

console.log(isOdd([1, 2, 9, 4, 1]));

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function lessThanMiddle(array){
    if(!isNumberOfElementsOdd(array)){
        return "error";
    }




