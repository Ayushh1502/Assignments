// PSUEDOCODE
// area1 = length1 * breadth2
// area2 = length2 * breadth2
// perimeter1 = 2 * ( length1 + breadth1)
// perimeter2 = 2 * (length2 + beradth2)
// if area1 > area2 --> print true , else --> false
// if perimeter1 > perimeter2 --> print true , else --> false

// CODE
let len1 = 1;
let bre1 = 2;
let len2 = 2;
let bre2 = 3;

let area1 = len1 * bre1;
let per1 = 2 * (len1 + bre1);
let area2 = len2 * bre2;
let per2 = 2 * (len2 + bre2);

if(area1 > area2){
    console.log("True");
}
else{
    console.log("False");
}
if(per1 > per2){
    console.log("True");
}
else{
    console.log("False");
}

// EXPLANATION
// here we have given length and breadth of both rectangles
// firstly we have calculated area and perimeter of both rectangles
// then we have used if else statement 
// in the line 20 if the condition is true then it will print true if the conditon
// is not true it will execute the else statement that is it will print false
// again in the line 26 it is checking if the perimeter of rectangle 1 is bigger than
// the rectangle 2 , if the condition is true then it will run the if statement and 
// True will be print otherwise condition is false than else statement is exucted and 
// False will be printed.