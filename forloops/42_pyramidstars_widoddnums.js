let str = " ";
let l = 1;
let num = 5;
for (let i = 0; i <= num; i++) {

    for (let j = num - i; j >= 0; j--)
        str += " ";

    for (let k = 1; k <= 2 * i - 1; k++) {
        str += "* ";
    }
    console.log(str);
    str = " ";
}