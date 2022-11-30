
let str="naman";
let bag="";
for(let j=str.length-1;j>=0; j--){
bag+=str[j];
}
if(str==bag){
console.log("it is Pelindrome");
}else{
console.log("it is not Pelindrome")
}