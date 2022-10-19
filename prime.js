let isPrime = true;
let num=23;
if (num>1){
    
    for(let i=2; i<=num/2;i++){
        if(num%i== 0){
            isPrime = false;
            console.log("No");
            break;
        }
    }
    if(isPrime==true){
        
    console.log("Yes");
    }
}
