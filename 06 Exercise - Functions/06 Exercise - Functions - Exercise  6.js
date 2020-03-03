// 2 Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]



var result = (function () {

    var a = ['a', 'b', 'c'];
    var b = [1, 2, 3];
    var c = [];

    for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
        c.push(a[i]);
        c.push(b[j]);
    }
    return c;
})()

console.log(result);

// 3. Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var result = (function () {
    var arr = [1, 2, 3, 4, 5, 6];
    var a = arr.slice(2);
    var b = arr.slice(0, 2);
    var c = a.concat(b);

    return c;

})()

console.log(result);




// 4. Write a function that takes a number and returns array of its digits.

var result = (function () {
    var n = 123;
    var a = n.toString();
    var a = a.split('');
    for (var i = 0; a.length; i++) {

    }
    return a;

})()

console.log(result);





// 5 Write a program that prints a multiplication table for numbers up to 12.


var result = (function () {



    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            console.log(i + "*" + j + " = " + i * j);
        }
    }

})()

console.log(result);


// 6 Write a function to input temperature in Centigrade and convert to Fahrenheit.


var result = (function (c) {


    var Fahrenheit = c * 9 / 5 + 32;
    return Fahrenheit;

})(36)

console.log(result);


// 7.  Write a function to find the maximum element in array of numbers. Filter out all non-number elements.


var result = (function () {

    var arr = [12, 15, 0, "halo", "b"];
    var newArr = [];


    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }



})()

console.log(result);