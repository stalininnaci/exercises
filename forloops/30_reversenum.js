let n=12345;
let k=[];
let l = 0
for(let i=n;i>0;i=parseInt(n)){
    let x=i%10;
    console.log(x);
    k[l++]=x;
    n /=10;
//console.log(k);
}
console.log(k);