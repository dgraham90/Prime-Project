function BuildTable() {
    this.createTable = function(len, tbl) { 
        let rows = [];
        const arr = new primes(len).primeArray;

        for (let i=0; i< arr.length+1; i++) {
            let row = [];
            for (var j = 0; j < arr.length+1; j++) {
                if (i==0 && j==0) row.push(' '); //Insert empty for 0,0 cell
                if(i == 0 && j > 0){
                    row.push(arr[j-1]); //First row so just add each prime
                  } 
                  else if(j == 0 && i>0){ //First cell so just add each prime
                    row.push(arr[i-1]);
                  } 
                  else if(i>0 && j>0){
                    row.push(arr[i-1]*arr[j-1]); //Multiply the primes and add to array
                }
            };
            rows.push(row);
        };
        return generateHtmlTable(rows, tbl);
    };
    //Create the html table.
    const generateHtmlTable = function(rowsArr, tbl) {        
       let tableBody = document.createElement('tbody');

       rowsArr.forEach(function(rowData) {
            let row = document.createElement('tr');
            rowData.forEach(function(cellData) {
                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
       });
       tbl.appendChild(tableBody);
       return tbl;
    }


}