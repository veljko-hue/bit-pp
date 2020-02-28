//---------------------------------------------------------------------------------------TASK 1
//---What is the output of the following peace of code?


console.log( 2>10 ? 'two': 5>3 ? 'five' : 'three');
/////  (condition) ? (true) : ((false) (condition) ? (true) : (false) 

var a = 12
var b = 10
var c = 5
var d = 3

if ( a > b ){
    console.log('two');
}else if( c > 3 ){
    console.log('five');  
}
else {
    console.log('three');
}


//---------------------------------------------------------------------------------------TASK 2
//---What is the output of the following peace of code?


var array = ['s', 'c', 'r', 'i', 'p', 't' ];
array.length = 0
console.log(array);


//---------------------------------------------------------------------------------------TASK 3
//---What is the output of the following peace of code?

var a = 12;
var result = 2;

if ( a > 10 ){
    result = result + 2; 
}else {
    result = result - 2;
}

console.log(result);

// with ternary operator 

console.log( 12 > 10 ? 2 + 2 : 2 - 2  );

var a = 12
var b = 10
var result = 2 

console.log( a > b ? result + result : result - result );

var a = 12
var b = 10
var result = 2 

console.log( a > b ? result + 2 : result - 2 );

//---------------------------------------------------------------------------------------TASK 4
//---What is the output of the following peace of code?

console.log(2e2 + 1);

console.log(2e5 + 1);

//---------------------------------------------------------------------------------------TASK 5
//---What is the output of the following peace of code?

var x = [1, 8, 9, 9, 2]
console.log(x[13]);

var x = [1, 8, 9, 9, 2]
console.log(x[1]);

//---------------------------------------------------------------------------------------TASK 6 ---------------------------------------! 
//---What is the output of the following peace of code?

var a = [ 2, 3, 'abc', 11, -7];
console.log(a[a.length -1 ]);

var a = [ 2, 3, 'abc', 11, -7];
console.log(a.length);

var a = [ 2, 3, 'abc', 11, -7];
console.log(a.length - 1);


//---------------------------------------------------------------------------------------TASK 6
//---What is the output of the following peace of code?

var a = 10, b = 5;
var result = a || b++;
console.log(a, b);


//---------------------------------------------------------------------------------------TASK 7 ---------------------------------------! string + - * / number = NaN
//---What is the output of the following peace of code?

console.log( 10 * 'abc');


//---------------------------------------------------------------------------------------TASK 8 ---------------------------------------! 
//---What is the output of the following peace of code?

console.log([2, 3, 4] === [2, 3, 4]);


//---------------------------------------------------------------------------------------TASK 9 ---------------------------------------! 
//---What is the output of the following peace of code?

console.log(typeof typeof 1);

console.log(typeof "1");

console.log(typeof 1);

//---------------------------------------------------------------------------------------TASK 10 ---------------------------------------! Concatenation
//---What is the output of the following peace of code?

var x = 10;
var y = 5;
console.log(x + "y = " + x+y);

//------------------10 y = 105

//---------------------------------------------------------------------------------------TASK 11 
//---How we can fetch the element with value 9?

var a = [[1,2,3],[4, 5, 6], 8, [9, 10]];

a[3][0]

//---------------------------------------------------------------------------------------TASK 12 ---------------------------------------! Concatenation
//---What is the output of the following peace of code?

console.log(typeof 2 + 3 );

console.log(typeof 2  );


//---------------------------------------------------------------------------------------TASK 13
//---What is the output of the following peace of code?

var array = ['abcd', 'ef', 'ghi', 'jkl'];
console.log(array[2]);

//---------------------------------------------------------------------------------------TASK 15
//---is number.of.users correct identifier?

// Identifiers are names.
// In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).
// The rules for legal names are much the same in most programming languages.
// In JavaScrpt, the first character must be a letter, or an underscore (_), or a dollar sign ($).
// Subsequent characters may be letters, digits, underscores, or dollar signs.
// Numbers are not allowed as the first character.
// This way JavaScript can easily distinguish identifiers from numbers.

//---------------------------------------------------------------------------------------TASK 16
//---What is the output of the following peace of code?

var x;
console.log(x);

//---------------------------------------------------------------------------------------TASK 17
//---What is the output of the following peace of code?

var input = 0xA41;
console.log(typeof input);


//---------------------------------------------------------------------------------------TASK 18
//---What is the output of the following peace of code?

console.log("312" === 312 );
console.log("312" == 312 );

//---------------------------------------------------------------------------------------TASK 19
//---What is the output of the following peace of code?

console.log( 2 < 3 < 1 ); 
console.log( 2 < 3 > 1 );    // ------------------------------------------------------------------------------------------------------! 
console.log( 2 < 3 );

//---------------------------------------------------------------------------------------TASK 20
//---What is the output of the following peace of code?

var a = 4, b = 3;
if ( a = b ){                 // ------------------------------------------------------------------------------------------------------!  = is assignment operator !
    console.log("The numbers are equal");
} else {
    console.log("Nope, they aren\'t");
}

var a = 4, b = 3;
if ( a == b ){                 // ------------------------------------------------------------------------------------------------------! == is comparison operator !
    console.log("The numbers are equal");
} else {
    console.log("Nope, they aren\'t");
}

//---------------------------------------------------------------------------------------TASK 21
//---What is the output of the following peace of code?

console.log("312" === 312 );
console.log("312" == 312 );


//---------------------------------------------------------------------------------------TASK 22
//---What is the output of the following peace of code?

var value = 2; 
switch (value) {
    case 2: 
    console.log('2');
    case 3: 
    console.log('2');
    case '2': 
    console.log('Hmmm');
    break;//------------------------------------------------------------------------------------------------------------------------------! Break !
    default:
    console.log('***');
    
}

var value = 2; 
switch (value) {
    case 2: 
    console.log('2');
    break;//------------------------------------------------------------------------------------------------------------------------------! Break !
    case 3: 
    console.log('2');
    break;
    case '2': 
    console.log('Hmmm');
    break;
    default:
    console.log('***');
    
}

//---------------------------------------------------------------------------------------TASK 23
//---What is the output of the following peace of code?

var n = 10;
n *= 4;
console.log(n);

var n = 10;
n += 4;
console.log(n);

var n = 10;
n -= 4;
console.log(n);

var n = 10;
n /= 4;
console.log(n);

//---------------------------------------------------------------------------------------TASK 24
//---What is the output of the following peace of code?

var x = 1, y = 3, z = 8;
x = y = z = 8

console.log(x, y, z);


//---------------------------------------------------------------------------------------TASK 25
//---What is the output of the following peace of code?

console.log("Good morning!");


//---------------------------------------------------------------------------------------TASK 26
//---What is the output of the following peace of code?

var x = 10;
var y = 5;
console.log( x + " y = " + (x+y));
