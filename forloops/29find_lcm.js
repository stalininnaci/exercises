let n=15;
let m=25;
if(n>m){
    max=n
}
else max=m;
for(let i=max;i>0;i++){
    if(i%n==0&&i%m==0){
    console.log(i);
    break;
  }
}