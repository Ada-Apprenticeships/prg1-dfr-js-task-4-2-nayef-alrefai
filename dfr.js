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
const dataset1 = ["10", "20.5", "5"];        // Valid numbers as strings
const dataset2 = [10, 20, 5];                // Valid numbers as numbers
const dataset3 = ["10", "abc", "30.5"];      // Mixed with invalid strings
const dataset4 = [10, "15.5", null, 5, ""];  // Mixed with non-numeric types
const dataset5 = [];                         // Empty array
const dataset6 = [["10", "20"], ["5"]];      // Array with sub-arrays (should return 0)

console.log(findTotal(dataset1)); // Expected: 35.5
console.log(findTotal(dataset2)); // Expected: 35
console.log(findTotal(dataset3)); // Expected: 40.5 (ignores "abc")
console.log(findTotal(dataset4)); // Expected: 30.5 (ignores null and empty string)
console.log(findTotal(dataset5)); // Expected: 0 (empty array)
console.log(findTotal(dataset6)); // Expected: 0 (contains sub-arrays)


const salesFigures = [1500.5, 1900.25, "2000.00", 1750.75];
console.log(calculateMean(salesFigures))
//end of test

function calculateMean(dataset) {
  let sum = 0;
  let count = 0;

  for (const element of dataset) {
    if (validNumber(element)) {
      sum = sum + Number(element); 
      count++;
    }
  }

  return count > 0 ? sum / count : 0;
}

function calculateMedian(dataset) {

}

function convertToNumber(dataframe, col) {

}

function flatten(dataframe) {

}

function loadCSV(csvFile, ignoreRows, ignoreCols) {

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
  //createSlice,
};