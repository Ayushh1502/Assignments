function p(num){
    bag = ""
    for(i=1;i<=num;i++){
        for(j=1;j<=num;j++){
            if(i == 1 || i == num ){
                bag = bag + "*" + " ";
            }
        }
        
        if(i !== 1 || i !== num){
            bag = bag + "*" + " ";
        }
        console.log(bag);
    }
   
}

p(5);