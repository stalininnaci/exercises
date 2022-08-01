let num=5;
let str="";
let k=1;
for(let i=0;i<5;i++){
    str="";
    for(let l=num-i;l>=0;l--)
    str += ' ';
    for(let j=0;j<=i;j++){
       str += k+" ";
    }
    console.log(str);
    k++;
}