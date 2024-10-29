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



function dataDimensions(dataframe) {

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