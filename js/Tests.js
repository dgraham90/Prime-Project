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
    const arrayLength = Math.floor(Math.random() * 100) + 1;
    let build;
    beforeAll(function() {
        //Generate some dom elements we can use for testing.
        let body = document.getElementsByTagName("body")[0];
        let div = document.createElement("div");
        let txtInput = document.createElement('input');
        let tbl = document.createElement("table");
        txtInput.setAttribute("type", "number");
        txtInput.setAttribute("id", "txtInput");
        tbl.setAttribute("id", "tblPrimes");

        //Set the input value to the random number generated
        txtInput.value = arrayLength;

        
        build = new BuildTable();
        build.createTable(txtInput.value, tbl);

        //append the created elements to the test page
        div.appendChild(txtInput);
        div.appendChild(tbl);
        body.appendChild(div);
      });


    it("User input should be a whole number", function() {
        expect(document.getElementById('txtInput').value % 1 === 0).toBe(true);
    });
    it("User input should be >= to 1", function() {
        expect(document.getElementById('txtInput').value).toBeGreaterThan(0);
    });
    it("Table generated n+1 wide", function() {
        expect(document.getElementById('tblPrimes').rows[0].cells.length).toBe(arrayLength+1);
    });
    it("Table generated n+1 high", function() {
        expect(document.getElementById('tblPrimes').rows.length).toBe(arrayLength+1);
    });
});
