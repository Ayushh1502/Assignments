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