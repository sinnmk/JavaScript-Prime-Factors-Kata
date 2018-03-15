let expect = require("chai").expect;
let primes = require("../app/prime-factors");

describe("Prime Factors", function() {

   it("Prime Factors of 1", function() {
     expect(new primes().getPrime(1)).to.deep.equal([])
   });

   it("Prime Factors of 2", function() {
     expect(new primes().getPrime(2)).to.deep.equal([2])
   });

   it("Prime Factors of 4", function() {
     expect(new primes().getPrime(4)).to.deep.equal([2,2])
   });

   it("Prime Factors of 8", function() {
     expect(new primes().getPrime(8)).to.deep.equal([2,2,2])
   });

   it("Prime Factors of 9", function() {
     expect(new primes().getPrime(9)).to.deep.equal([3,3])
   });
});

