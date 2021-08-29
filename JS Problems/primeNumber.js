function isPrime(n){
    for(i = 2; i < n/2; i++){
        if(n%i==0){
            return 'Not a Prime Number';
        }
        return 'Prime number';
    }
}

console.log(isPrime(77));