let n='10100101';
//n=n.toString;
let str='';
for(let i=0;i<n.length;i++){
    if(n[i]==0)
     str+='1';
else 
     str+='0';
}
console.log(str);
