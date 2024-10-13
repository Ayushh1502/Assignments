// PSEUDOCODE
// We have given distance and time 
// To calculate the speed = distance / time
// if speed > 40 --> Apply Brakes , else --> Keep Going

// CODE

let distance = 100;
let time = 2;
let speed = distance / time;

if(speed > 40){
    console.log("Apply Brakes");
}
else{
    console.log("Keep Going");
}

// EXPLANATION
// here given is distance and time 
// we have to calculate the speed that is distance / time
// then we have used if else statement to check that speed is over or not
// in line 12 if the speed is more than 40 it will execute the if block and print Apply brakes
// if the if block is not executed then it will execute the else statement and 
// print Keep Going 