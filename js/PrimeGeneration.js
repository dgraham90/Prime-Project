function primes(length) {
    const Length = length;
    //local storage test for IE / Safari
    const localStorageAvailable = function() {
        try {
            localStorage.getItem("PrimeArray")
            return true;
        } catch (exception) {
            return false;
        }
    };
    const isPrime = function(n) {
        //n must be atleast 2
        if( n < 2) return false;
        // a number is prime if it is divisible only by 1 and itself
        let rt = Math.sqrt(n), i;
        for( i=2; i<=rt; i++) {
            if( n%i == 0) { return false;}
        }
        return true;
    };
    const createPrimeArray = function(count, firstPrime) {
        //If we only want one prime number return an array only containing 2.
        if (count == 1) return [2];

        primeArr = [];
        //loop through the desired array length and calculate new primes until we reach the limit.
            for (let i=firstPrime;primeArr.length < count;i++) {
                if (isPrime(i)) {
                    primeArr.push(i);
                }
            };
        return primeArr;
    };
    const GetPrimeArray = function() {
        //Check if we have already cached a list of primes.
        if (localStorageAvailable() && localStorage.PrimeArray) {
            //if the cached prime array is not long enough re-use the existing array and only calculate new primes.
            let storedArray = localStorage.PrimeArray.split(",");
            if (storedArray.length < Length) {
                //start creating new primes starting from the largest number stored in the array.
                let arr = storedArray.concat(createPrimeArray(Length, parseInt(storedArray[storedArray.length -1]) + 1));
                //Insert the newly extended prime array into the local storage.
                storeArray(arr);
                return arr;
            } else {
                //only return the required number of primes.
                return storedArray.splice(0,Length);
            }
        } else {
            let arr = createPrimeArray(Length, 2);
            //Insert the newly created prime array into local storage.
            storeArray(arr);
            return arr;
        }
    };
    const storeArray = function(arr) {
        if (localStorageAvailable())
            localStorage.setItem("PrimeArray", arr);
    }
    this.primeArray = GetPrimeArray();
};