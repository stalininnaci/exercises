let n=8308;
n=n.toString();
let str = '';

for(let i=0;i<n.length;i++){
    if(n[i]=='1')
        str +='one' + ' ';
       else if(n[i]=='2')
        str +='two' + ' ';
        else if(n[i]=='3')
        str +='three' + ' ';
        else if(n[i]=='4')
        str +='four' + ' ';
       else if(n[i]=='5')
        str +='five' + ' ';
        else if(n[i]=='6')
        str +='six' + ' ';
        else if(n[i]=='7')
        str +='seven' + ' ';
        else if(n[i]=='8')
        str +='eight' + ' ';
        else if(n[i]=='9')
        str +='nine' + ' ';
        else if(n[i]=='0')
        str +='zero' + ' ';
}
console.log(str);