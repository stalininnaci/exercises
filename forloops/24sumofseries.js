let x=3;
let m=5;
let sum=1;
for(let i=1;i<=m;i++){
    sum+=x**(i/fact(i));
    console.log(sum);
}

//console.log(sum)
function fact(value){
      let n=1;
      for ( i=1;i<=value;i++){
        n*=i;
}
return n;
}