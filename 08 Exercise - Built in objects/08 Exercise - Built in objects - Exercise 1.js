// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


function duplicate(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
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


function delite(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArr.push(arr[i])
        }
    }

    return newArray.sort(function (a, b) { return a - b })

}

// 3Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

var isOdd = function (arr) {
    if (arr.length % 2 === 0) {
        return true;

    } else {
        return false
    }
}

console.log(isOdd([1, 2, 9, 4, 1]));

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4











// 4. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }



var arr = [-1, 8.1, 3, 6, 2.3, 44, 2.11]

var smallestElement = function (arr) {
    var sn = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < sn) {
            sn = arr[i];
        }
        var li = arr.lastIndexOf(sn);
    }

    return {
        minValue: sn,
        minLastIndex: li,

    }
}

console.log(smallestElement(arr))


// 5A.Write a function that finds all the elements in a given array less than a given element. 
// Input: [2, 3, 8, -2, 11, 4], 6 
// Output: [2, 3, -2, 4]


var arr = [2, 3, 8, -2, 11, 4];
var n = 6;

var smallerThan = function (arr, n) {
    newarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            newarr[newarr.length] = arr[i];//////// newarr[newarr.length] u prvoj iteraciji je na nuli pa krece dalje :)  
        }
    }
    return newarr;
}
console.log(smallerThan(arr, n))



// 5B Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// Output: [’Programming’, ‘product’]

var arr = ["JavaScript", "Programming", "fun", "product"];

var find = function (arr, w){
newarr=[]

}
