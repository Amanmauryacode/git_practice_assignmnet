let str = "naman";
let count = 1;

for(i = 0 ; i<str.length; i++){
    if(str[i] == str[str.length -1-i]){
        continue;
    }else{
        count =0;
        console.log("Not Palindrome");
        break;
    }
}
if(count==1){
    console.log("Palindrome");
}
