function check(L1,L2,B1,B2){
    let A1 = L1 * B1;
    let P1 = 2 * (L1 + B1);
    let A2 = L2 * B2;
    let P2 = 2 * (L2 + B2);

    if(A1 > A2){
        console.log("True");
    }
    else{
        console.log("False");
    }
    if(P1 > P2){
        console.log("True");
    }
    else{
        console.log("False")
    }
}

check(1,2,2,3);