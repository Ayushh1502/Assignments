function sumNumbers(n1){
    n1 = prompt("Enter a Number");
    if(typeof(n1) !== "number"){
        for(i=0;i<Infinity;i++){
            n1 = prompt("Enter a Valid Number")
            if(typeof(n1) == "number"){
                break;
            }
        }
    }
    return n1;
}
console.log(sumNumbers());


