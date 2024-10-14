// we have given fuel and distance
// to find required = fuel * distance
// if require > 50 --> print enough , else --> Print Go On

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