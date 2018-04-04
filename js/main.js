$(function() {
    $('#btnSubmit').on('click', function() {
        if(!isInt(parseInt($('#txtInput').val()))) {
            alert('Please enter a whole number greater than 0');
            return;
        }
        //first clear table
        $('#tblPrimes').html('');
        //call the relevant methods to get the array of primes and create the table
        new BuildTable().createTable(
            new primes(
                $('#txtInput').val()).primeArray, 
                $('#tblPrimes')[0]
            );
    });

});


function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

