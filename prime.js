let isPrime = true
if (num>1){
    
    for(let i=2; i<=num/2;i++){
        if(num%i== 0){
            isPrime = false;
            console.log("No");
        }else{
            isPrime = true;
        }
    }
    if(isPrime){
        
    console.log("Yes");
    }
}