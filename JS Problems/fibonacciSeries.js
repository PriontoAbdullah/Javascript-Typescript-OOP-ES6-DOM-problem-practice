function fibonacci(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else {
        const fibo = fibonacci(n-1);
        const newFibo = fibo[n-1] + fibo[n-2];
        fibo.push(newFibo);
        return fibo;
    }
}

console.log(fibonacci(10));