//if (!is.isempty(num)){
    let str ='';
    let l = 1;
    let num=4;
    let p;
    for(let i=0;i<=num;i++){
        //for(let j=num-i;j>=0;j--)
          // str += ' ';
           for(let k=0;k<=i;k++){
           if(k==0)
           p=1;
           else
           p=p*(i-k+1)/1;
        
        console.log(p)
           }
    }