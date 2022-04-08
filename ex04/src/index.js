function sumFibonacci(num){
    let fibo = [1, 0];
    let sum = 0;
    let oddSum = 0;
    for (let i = 0; i < 32; i++){
    sum = fibo[0] + fibo[1];
    fibo.push(sum);
    fibo.shift();
    if (fibo[0] % 2 != 0 && fibo[0] < num){
    oddSum= oddSum + fibo[0];
      }
    }
    return oddSum;
    }
    
    console.log(sumFibonacci(1));
    console.log(sumFibonacci(10));
    console.log(sumFibonacci(20));
    console.log(sumFibonacci(4));
    console.log(sumFibonacci(-5));
    module.exports = sumFibonacci;
    