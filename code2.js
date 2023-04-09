 function isPrime (num){
  if (num < 2) {
    console.log("Число должно быть больше 1");
} else if (num === 2) {
    console.log("Простое число");
} else {
    const limit = num / 2;
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            console.log("Составное число");
            break;
        }
        console.log("Простое число");
    }
}
 }
   isPrime(4);
  
   

   


    
 

