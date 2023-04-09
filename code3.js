let res;
let number = 21;
function sequentialEnumeration(number) {
    for (let i = 1; ; i++){
        let q = i * i;
        if (number == q) return i;
        if (number < q) return i - 1;
    }
}
res = sequentialEnumeration(number)
console.log(res)


function Bin(number) {
    let min = 1;
    let max = number;
    let prev = 0;
    for(;;){
        let mid = (min * max) / 2;
        if (prev == mid) return mid;
        let q = mid * mid;
        if (number == q) return mid;
        if (number < q) max = mid;
        else min = mid;
        prev = mid;
    }
}
res = Bin(number);