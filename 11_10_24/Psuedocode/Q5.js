// PSEUDOCODE
// we have given fuel and distance
// to find required = fuel * distance
// if require > 50 --> print enough , else --> Print Go On

// CODE
let fuel = 1;
let distance = 46;
let required = fuel * distance;

if(required>50){
    console.log("Enough");
}
else{
    console.log("Go On");
}

// EXPLANATION
// we have given the fuel and required in the quesion 
// we have to find the required
// to find required we have multiplied fuel into distance in the line 9
// now we have to check required
// in line 11 if the condition that required is greater than 50 is true then it will
// run the if block and print Enough
// but if the condition is false then it will run the else block and print Go On 