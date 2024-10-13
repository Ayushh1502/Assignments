function brakes(d,t){
    let s = d/t;

    if(s>40){
        console.log("Apply Brakes");
    }
    else{
        console.log("Keep Going");
    }
    
}

brakes(100,2);