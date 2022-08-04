let n=5;
let str="";
for(let i=1;i<=n;i++){
    for(let k=n-i;k>=0;k--)
    str += " ";
    for(let j=i;j>0;j--){
        str += j+" ";
    }
        console.log(str);
        str="";
    }