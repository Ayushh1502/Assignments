function fuel(f,d){
    let required = f * d;
    if(required > 50){
        console.log("Enough");
    }
    else{
        console.log("Go On");
    }
}

fuel(1,46);