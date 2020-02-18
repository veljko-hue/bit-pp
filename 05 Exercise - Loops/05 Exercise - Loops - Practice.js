

/////////////////////////////////////--------------FOR LOOP

var age = 5;

while(age < 10){
       console.log("Your age is less than 10");
    age++
}

console.log("You are now over 10");

/////////////////////////////////////--------------FOR LOOP

for(let i = 5; i>=1; i-- ){
    if(i%2 !==0) console.log(i); 
}

//---------------------------------------------------------


for(let i = 1; i<=5; i++ ){
    if(i%2 !==0) console.log(i); 
}



/////////////////////////////////////--------------FOR LOOP

const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]

for( let i=0; i < days.length; i++){
    console.log(days[i]);
    
}