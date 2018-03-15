class PrimeFactors {
  
  getPrime(n){ 
    var result = []
    while(n > 1){
    for(var divisor = 2; divisor <=n; divisor++){
        while(n % divisor == 0){
          result.push(divisor)
          n/=divisor
        }   
      }
    }
    return result 
  }
}

module.exports = PrimeFactors;
