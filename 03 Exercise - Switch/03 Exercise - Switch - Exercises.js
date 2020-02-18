////////////////////////////////////////////////////////////////////////////-TASK 1
// Write a program that shows text representation of a day in a week for a number 
// input from 1 to 7. Print output in console. 
// For input 1, output should be “Monday”.

// var result ="", day = 7;

// switch (day) {
//     case 1: result = "Monday";
//     break;
//     case 2: result ="Tuesday";
//     break;
//     case 3: result = "Wednesday";
//     break;
//     case 4: result = "Thursday";
//     break;
//     case 5: result = "Friday";
//     break;
//     case 6: result = "Satrday";
//     break; 
//     case 7: result = "Sunday";
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 2
// Write a program that shows text representation of a day in a week for a number input
//  from 1 to 7. All other cases output a message explaining that input must be a number 
//  between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

// var result ="", day = 12;

// switch (day) {
//     case 1: result = "Monday";
//     break;
//     case 2: result ="Tuesday";
//     break;
//     case 3: result = "Wednesday";
//     break;
//     case 4: result = "Thursday";
//     break;
//     case 5: result = "Friday";
//     break;
//     case 6: result = "Satrday";
//     break; 
//     case 7: result = "Sunday";

//     default: result = "Input must be a number between 1 and 7";
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////-TASK 3
// Write a program that for a 1-7 number input (representing a day in a week) 
// shows if that day is a weekday or weekend. All other cases output a message 
// explaining that input must be a number between 1 and 7.
// 		For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.


// var result ="", day = 5;

// switch (day) {
//     case 1 || 2 || 3 || 4 || 5 : result = "It’s weekday";/////////////////////////////-DOESN'T WORK - WHY?
//     case 6 || 7 : result = "It’s weekend";
//     default : result = "Input must be number between 1 and 7";
// }

// console.log(result);

// var result ="", day = 7;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         result = "It’s weekday!"
//         break;
//     case 6:
//     case 7:
//         result = "It\s weekend!"
//         break;
//     default:
//         result = "Input must be number between 1 and 7";
//         break;
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 4
// Write a program that for a 1-12 number input (representing a month in a year) 
// shows that month’s name. All other cases output a message explaining that input 
// must be a number between 1 and 12. 
// 		For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

// var result ="", month = 14;

// switch (month) {
//     case 1: result = "January";
//     break;
//     case 2: result = "February";
//     break;
//     case 3: result = "March";
//     break;
//     case 4: result = "April";
//     break;
//     case 5: result = "May";
//     break;
//     case 6: result = "June";
//     break; 
//     case 7: result = "July";
//     break;
//     case 8: result = "August";
//     break;
//     case 9: result = "September";
//     break;
//     case 10: result = "October";
//     break;
//     case 11: result = "November";
//     break;
//     case 12: result = "December";

//     default: result = "Input must be a number between 1 and 12"
// }
// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 5
//Write a program that for a 1-12 number input (representing a month in a year) 
// shows what season it is. All inputs different from 1-12 output a message explaining 
// that input must be a number between 1 and 12

// var result ="", month = 5;

// switch (month){ 
//     case 12:
//     case 1:
//     case 2: 
//        result = "it\s the Winter.";
//        break;
//     case 3:
//     case 4:
//     case 5:
//         result = "it\s the Spring.";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         result = "it\s the Summer.";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         result = "it\s the Fall.";
//         break;

//     default: result = "Input must be a number between 1 and 12."
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 6
// Write a program that for a string input of a grade from “A”-“F” outputs 
// a proper info message about that grade in the following manner:
//  A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". 
//  Input different from letters A-F outputs a message "Unknown grade".

// var result = "", leter = "U";

// switch (leter){
//     case "A": result = "Good job!";
//     break;
//     case "B": result = "Pretty good!";
//     break;
//     case "C": result = "Passed!";
//     break;
//     case "D": result = "Not so good!";
//     break;
//     case "F": result = "Failed.";
//     break;

//     default : result = "Unknown grade.";
// } 

// console.log(result);

////////////////////////////////////////////////////////////////////////////-TASK 7
// Write a program that takes as input a city name and outputs the country where the city is. 
// You may choose which cities and countries you want to output yourself, however there 
// has to be at least 5 countries and 15 cities. Note that each country must have a different 
// number of cities. Input different from the listed cities should output a message
// "Please choose a different city".

// var country = "", city = "Milan";

// switch(city){
     
//     case "Manchester":
//     case "Liverpool": 
//     case "London": 
//         country = "England";
//         break;
//     case "Paris":
//     case "Cannes":
//     case "Marseille":
//         country = "France"
//         break;
//     case "Rome":
//     case "Milan":
//     case "Naples":
//     case "Venice":
//     case "Bologna":
//         country = "Italy"
//         break;
//     case "Madrid":
//     case "Barcelona":
//     case "Valencia":
//         country = "Spain"
//         break;
//     case "Porto":
//     case "Lisbon":
//         country = "Portugal"

//     default : result = "Please choose a different city"
//  }
 
//  console.log(country)

 ////////////////////////////////////////////////////////////////////////////-TASK 8
//  Write a program that takes as input two numbers and a string denoting the operation 
//  (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

// var result ="", a = 10, b = 0; operation = "a / b ";

// switch (operation){
//     case "a + b ": result = a + b;
//     break;
//     case "a - b ": result = a - b;
//     break;
//     case "a * b ": result = a * b;
//     break;
//     case "a / b ": result = a / b;
//     case b = 0 : result = a;
//     break;
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////// division by zero! = Infinity
