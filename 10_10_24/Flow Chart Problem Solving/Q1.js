function tf(num1,num2){
    let bag = "";
    if(num1 > num2){
        bag = bag + "True" + " ";
    }
    else{
        bag = bag + "False" + " ";
    }
    if(num1 < num2){
        bag = bag + "True" + " ";
    }
    else{
        bag = bag + "False" + " ";
    }
    if(num1 == num2){
        bag = bag + "True" + " ";
    }
    else{
        bag = bag + "False" + " ";
    }

    return bag;
}

console.log(tf(4,16));
console.log(tf(10,10));
console.log(tf(8,2));

