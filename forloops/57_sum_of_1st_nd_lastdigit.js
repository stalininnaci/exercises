let n=12345;
let a=n%10;
//console.log(a);
for(let i=n;i>=10;i=n){
n = parseInt(i/10);
}
console.log(a+n);
