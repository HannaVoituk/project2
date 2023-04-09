function getFactorial(n){
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
alert (getFactorial(5));