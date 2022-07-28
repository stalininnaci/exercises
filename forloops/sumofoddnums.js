// var prompt = require("prompt");
// let count=0;
// let sum=0;
// for(let i=1;1>0;i++){
//     if(i%2!=0){
//         sum=sum+i;
//         count++;
//     }
//     if(count==terms)
//     break;
//     console.log(sum);
// }

// var name =prompt('enter your name');
// prompt.start();
// prompt.get(['username', 'email'], function (err, name) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  username: ' + name);
//     console.log('  email: ' + name);
//   });

// var nam = prompt("Hi, Welcome to the Drivethrough!! What is your name?");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //readline.question('terms', function(val){
    //console.log(`Hey there ${val}!`);
    //readline.close();
//     let count=0;
//  let sum=0;
//  for(let i=1;i++;){
//      if(i%2!=0){
//          count++;
//          sum=sum+i;
//      if(count>5)
//     break;
//      }
//       console.log(sum);
// }
 // });

 
 
     sum = 0, curr = 1;
     for (i = 0; i < 5; i++) {
         sum += curr;
         curr += 2;
     }
     console.log('sum',sum);
 