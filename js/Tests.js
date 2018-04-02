describe("Unit Tests for prime number generation", function() { 
    let prime;
    //Calculate a random number between 2 and 100
    const arrayLength = Math.floor(Math.random() * 100) + 2;

    beforeEach(function() {
        //Add a matcher to test if a number is prime
        jasmine.addMatchers({
            isPrime: function(num) {
                        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                            if(num % i === 0) return false; 
                        return num !== 1;
                    }
        });
            
        //before each test instantiate a new prime array
        prime = new primes(arrayLength);
    });

    it("Prime Array isn't empty", function() {
        expect(prime.primeArray.toBeGreaterThan(1));
    });
    it("Array length should be equal to input", function() {
        expect(prime.primeArray.length.toBe(arrayLength));
    });
    it("Random number in Array is a prime number", function() {
        expect(prime.primeArray[Math.floor(Math.random() * arrayLength)].isPrime());
    });
});

describe("Unit Tests for DOM", function() {
    it("User input should be a whole number", function() {

    });
    it("User input should be >= to 1", function() {

    });
    it("Table generated n+1 wide and n+1 high", function() {

    });
    it("Generates table in less than 5 seconds", function() {

    });
});
