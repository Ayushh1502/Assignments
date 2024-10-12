
let n = prompt("Please Enter a number between 1 - 10");
let bag = "";
for(i=1 ;i<=n ; i++){
    if(i % 3 == 0){
        continue;
    }
    if(i % 7 == 0){
        break;
    }
 bag = bag + i + " ";
console.log(bag);
    
}