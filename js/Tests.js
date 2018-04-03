describe("Unit Tests for prime number generation", function() { 
    //Calculate a random number between 1 and 100
    const arrayLength = Math.floor(Math.random() * 100) + 1;
    let prime;
    beforeEach(function() {
        //instantiate a new prime object before each test.
        prime = new primes(arrayLength);

        //Add a matcher to test if a number is prime
        jasmine.addMatchers({
            toBePrime: function() {
                return {
                    compare: function(num) {
                        let result = { pass: function(num) {
                            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                                if(num % i === 0) return false; 
                            return num !== 1;                        
                            }
                        };
                        if (result.pass) {
                            result.message = num + " is a prime number";
                        } else {
                            result.message = "Expected " + num + " to be a prime number";
                        }
                        return result;
                    }
                }
            }
        });  
    });          

    it("Prime Array isn't empty", function() {
        expect(prime.primeArray.length).toBeGreaterThan(0);
    });
    it("Array length should be equal to input", function() {
        expect(prime.primeArray.length).toEqual(arrayLength);
    });
    it("Random number in Array is a prime number", function() {
        expect(prime.primeArray[Math.floor(Math.random() * arrayLength)]).toBePrime();
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
