

// ////////////////////////////////////////////////////////////////////////////-WHILE LOOP

// while loops are the simplest type of iteration

// The while statement is followed by a condition in parentheses and a code block in curly brackets

// As long as the condition evaluates to true, the code block is executed over and over again

// var i = 0

// while ( i < 10) {
//     console.log(i)
// }



// ////////////////////////////////////////////////////////////////////////////- DO - WHILE LOOP

// do-while loops are a slight variation of while loops

// Code block (loop’s body) is always executed, at least once, before the condition is evaluated

// var i = 10;

// do{
//     i++;
// } while ( i < 10 );

// console.log(i);



//  ////////////////////////////////////////////////////////////////////////////-FOR LOOP

// for is the most widely used type of loop

// You should make sure you're comfortable with this one

// It requires just a little bit more in terms of syntax

// The most widely used for loop pattern:
// In the initialization part, you define a variable (or set the initial value of an existing variable), most often called i
// In the condition part, you compare i to a boundary value, like i < 100 
// In the increment part, you increase i by 1, like i++

// var punishment = "";
// for (var i = 0; i < 100; i++){
//     punishment += "NO MORE\n";
// }

// console.log(punishment);

// var punishment = '';
// for (var i = 0; i < 100; i++){
// punishment += 'I will never do this again\n';
// }

// console.log(punishment);



 ////////////////////////////////////////////////////////////////////////////-NESTED FOR lOOP

//  The for loops can be nested within each other.

//  Assembles a string containing 10 rows and 10 columns of asterisks. Think of i being the row and j being the column of an "image"
 

var res = "\n";

for (var i = 0; i < 5; i++ ) {
    for (var j = 0; j < 5; j++) {
        res += "*\t";
    }
    res += "\n"
}

console.log(res);


var res = '\n';
for ( var i = 0; i < 10; i++){
    for ( var j = 0; j < 10; j++ ) {
        res += "*\n";
    }
    res += "\n"
}

console.log(res);





 ////////////////////////////////////////////////////////////////////////////-FOR IN lOOP

//  Used to iterate over the elements of an array (or an object, as you'll see later)

// This is its only use; it cannot be used as a general-purpose repetition mechanism that replaces for or while

// for-in is mostly suitable for objects, and the regular for loop should be used for arrays


var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '\n';
for (var i in a) {
    result += 'index: ' + i + ', value: ' + a[i] + '\n';
}

console.log(result);
