let str = " ";
let l = 1;
let num = 5;
for (let i = 0; i < num; i++) {

    for (let j = i; j >= 0; j--) {
        if (j % 2 == 0)
            str += 1;
        else
            str += 0;
    }
    console.log(str);
    str = " ";
}

