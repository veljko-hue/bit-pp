



var result = '';
var a = 10;

if (a !== 8) {
    result = a + ' a is greater then 8';
}

console.log(result);



var a = 10; b = 20; c= 7; d = 8; result = '';

if (a + b + c + d > 0){
    result = 'the sign is + '
}
else {
    result = 'the sign is - '
}

console.log(result);



var result = ''; var a = - 10; var b = -20; var c = 0; var d = 7;
if( a > b && a > c && a > d) {
    result = a ;
}
else if ( b > c && b > d){
    result = b ;
}
else if ( c > d){
    result = c ; 
}
else {
    result = d
}

console.log(result);



var a = 10; result = '';

if( typeof a === Number || a % 2 === 0 ) {
    result = a/2;
}
else{
    result = 'X'
}

console.log(result);



var a = 10; var b = 10;

if( a > b){
    console.log(a);
    
}
else if ( b > a){
    console.log(b);
}

else if ( a = b){
    console.log( "tnae");
    
}


var c = 60;
var f = (9*c/5) + 32;

console.log(f);

var a = 15;
var b = a - 13;


if( b > 13 ){
    console.log(b*2);
}
else if ( b < 13){
    console.log( "error");
    
}

var a = 5; b = 5; 

if ( a === b ){
    console.log( a + b);
} 
else {
    console.log( a * b);
    
}


var a = 33; b = 17 ; c = a + b;

if ( a === 50 || b === 50 || c === 50){
    console.log("true");   
}
else {
    console.log("-");
    
}


var a = 120

if( 20 < a < 100){
    console.log("20 ⇔ 100");
}
else if( 100 < a < 400 ){
    console.log("100 ⇔ 400");
}

else if ( 20 > a ){
    console.log("-");
    
}

result = "",  a = 234;

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


















