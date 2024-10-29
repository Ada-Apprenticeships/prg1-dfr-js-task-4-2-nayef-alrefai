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
  // Check if data is undefined or null
  if (data === undefined || data === null) {
    return [-1, -1];
  }

  if (typeof data === 'object' && typeof data.length === 'number'){
    if (data[0] && typeof data[0] === 'object' && 'length' in data[0]) {
      const rows = data.length;
      const columns = data[0].length;
      return [rows, columns];
    } else {
      // It's a 1D array (dataset)
      return [data.length, -1];
    }
  }

  // If not an array, return [-1, -1]
  return [-1, -1];
}
function findTotal(dataset) {
  
}

function calculateMean(dataset) {
  
}

function calculateMedian(dataset) {

}

function convertToNumber(dataframe, col) {

}

function flatten(dataframe) {

}

function loadCSV(csvFile, ignoreRows, ignoreCols) {

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