const fs = require("fs");

function fileExists(filename) {
  return fs.existsSync(filename);
}

function validNumber(value) {
  if (typeof value === 'number') {
    return !isNaN(value);
  }
  
  else if (typeof value === 'string') {
    return /^-?\d+(\.\d+)?$/.test(value);
  }

  else return false;
}
//validation tests
console.log(validNumber("0.1")); // → true
console.log(validNumber("-1.12")); // → true
console.log(validNumber(5)); // → true
console.log(validNumber(-10)); // → true
console.log(validNumber("5.")); // → false (decimal point must be followed by digits)
console.log(validNumber("+5")); // → false (explicit plus sign not allowed)
console.log(validNumber("0.0.1")); // → false (multiple decimal points)
console.log(validNumber("three")); // → false (not a number)



function dataDimensions(data) {
  if (data === undefined || data === null) {
    return [-1, -1];
  }

  if (typeof data === 'object' && typeof data.length === 'number'){
    if (data[0] && typeof data[0] === 'object' && 'length' in data[0]) {
      const rows = data.length;
      const columns = data[0].length;
      return [rows, columns];
    } else {
      return [data.length, -1];
    }
  }
  return [-1, -1];
}

/*function findTotal(dataset) {
  if (typeof dataset !== 'object'){
    return false;
  }

  let total = 0;
  const firstRow = dataset[0] && dataset[0].length;
  for (let i = 0; i < dataset.length; i++){
    const row = dataset[i];

    if (row.length !== firstRow) {
      return false
    }
    for (let j = 0; j<row.length; j++){
      const element = row[j];
      if (typeof element === 'number' && !isNaN(element)) {
        total += element;
      } 
      else {
        return false;
    }
  }  
}
return total;
}*/

function findTotal(dataset) {
  let total = 0;
  
  if(dataset !== dataset || dataset.length === 0)
    return 0;

  for (let i = 0; i < dataset.length; i++) {
    const item = dataset[i];

    if (validNumber(item)) {
      total += parseFloat(item);
    }
  }

  return total;
}
//testing
const [dataframe, totalRows, totalColumns] = loadCSV('path/to/your/csvfile.csv', [0], [0, 2]);
console.log("Dataframe:", dataframe);
console.log("Total Rows:", totalRows);
console.log("Total Columns:", totalColumns);


const salesFigures = [1500.5, 1900.25, "2000.00", 1750.75];
console.log(calculateMean(salesFigures))


function calculateMean(dataset) {
  
}

function calculateMedian(dataset) {

}

function convertToNumber(dataframe, col) {

}

function flatten(dataframe) {

}

function loadCSV(csvFile, ignoreRows = [], ignoreCols = []) {
  
}


function createSlice(dataframe, columnIndex, pattern, exportColumns = []) {

}

module.exports = {
  fileExists,
  validNumber,
  dataDimensions,
  calculateMean,
  findTotal,
  convertToNumber,
  flatten,
  loadCSV,
  calculateMedian,
  createSlice,
};