let str='122345';
let num=9;
let count=0;
for(let i=0;i<=num;i++){
    for(let j=0;j<str.length;j++){
        if(str[j]==i)
        count++;
    }
        console.log('frequency of'+i+' ='+count);
        count=0;
}