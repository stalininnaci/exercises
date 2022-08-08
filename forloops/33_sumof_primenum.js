let n = 40;
let flag = 1;
let a = [];
let k = 0;
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
        else flag = 1;
    }
    if (flag == 1)
        a[k++] = i;
}
console.log(a);
for (i = 0; i < a.length; i++) {
    for (j = i; j < a.length; j++) {
        if (a[i] != a[j]) {
            if (a[i] + a[j] == n) {
                console.log(a[i] + "+" + a[j] + "=" + n);
            }
        }
    }
}