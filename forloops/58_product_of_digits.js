let n=3456;
let a=1;
for(let i=n;i>0;i=n){
     let x=n%10;
     a*=x;
     n= parseInt(i/10);
}
console.log(a);
