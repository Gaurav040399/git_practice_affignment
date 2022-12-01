let str = "nama";
let ans = false;
let j = Math.floor(str.length/2); 
for(let i=0; i<=j; i++){
    if(str[i] == str[str.length-i-1]){
        ans = false;
    }else{
        ans = true;
        break;
    }
}
if(ans){
    console.log(true);
}else{
    console.log(false)
}