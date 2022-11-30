let factor=0;
let num=7;
let flag=false;
for(let i=1; i<=num; i++){
if(num%i==0){
flag=true;
}
}
if(flag==true){
console.log("Prime");
}else{
console.log("Not Prime");
}


