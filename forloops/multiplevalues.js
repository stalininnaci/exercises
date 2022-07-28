const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', function(val){
    console.log(`Hey there ${val}!`);

for(let i=1;i<=val;i++){
    for(let j=1;j<=val;j++){
        let a=i*j;
    console.log(i+'*'+j+'='+a);
    }
}
    readline.close();
  });