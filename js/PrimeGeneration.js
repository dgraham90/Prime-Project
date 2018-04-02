function primes(length) {
    this.Length = length;

    this.isPrime = function(n) {
        //n must be atleast 2
        if( n < 2) return false;
        // a number is prime if it is divisible only by 1 and itself
        let rt = Math.sqrt(n), i;
        for( i=2; i<=rt; i++) {
            if( n%i == 0) { return false;}
        }
        return true;
    };
    this.createPrimeArray = function(start, end) {
        primeArr = [];
        //loop through the desired array length and check if a nubmer is prime, add it to the array if so.
        for (let i=start; i < end; i++) {
            if (this.isPrime(i))
                primeArr.push(i);
        }
        return primeArr;
    };
    this.GetPrimeArray = function() {
        //Check if we have already cached a list of primes, this so we can save time having to calculate them each time.
        if (localStorage.PrimeArray) {
            //if the cached prime array is not long enough re-use the existing array and only calculate new primes.
            let storedArray = localStorage.PrimeArray.split(",");
            if (storedArray.length < this.Length) {
                let arr = storedArray.join(this.createPrimeArray(storedArray.length + 1, this.Length));
                //Insert the newly extended prime array into the local storage.
                this.storeArray(arr);
                return arr;
            } else {
                //only return the required number of primes.
                return storedArray.splice(0,this.Length);
            }
        } else {
            let arr = this.createPrimeArray(0, this.Length);
            //Insert the newly created prime array into local storage.
            this.storeArray(arr);
            return arr;
        }
    };
    this.storeArray = function(arr) {
        localStorage.setItem("PrimeArray", arr);
    }
    this.primeArray = this.GetPrimeArray();
};