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
  if (dataset !== dataset || typeof dataset.length !== 'number'){
    return 0;
  }

  const validNumbers = [];
  for (let i = 0; i < dataset.length; i++) {
    const numValue = Number(dataset[i]);

    if (!isNaN(numValue)) {
      validNumbers[validNumbers.length] = numValue;
    }
  }

  if (validNumbers.length === 0) {
    return 0;
  }
  validNumbers.sort((a, b) => a - b);

  const middle = validNumbers.length / 2;
  
  return validNumbers.length % 2 !== 0 ? validNumbers[(validNumbers.length -1) / 2]: (validNumbers[middle - 1] + validNumbers[middle])/2;
}

function convertToNumber(dataframe, col) { 
  let conversionCount = 0;

  for (let row of dataframe) {
    let cellValue = row[col];

    // Check if cellValue is a numeric string
    if (typeof cellValue === 'string' && /^-?\d+(\.\d+)?$/.test(cellValue)) {
      row[col] = parseFloat(cellValue);  
      conversionCount++;
    }
  } 
  return conversionCount;
}

function flatten(dataframe) {
  const firstRow = dataframe[0];
  const columnName = Object.keys(firstRow)[0];

  if (columnName && Object.keys(firstRow).length === 1) {
    const values = [];

    for (let i = 0; i < dataframe.length; i++) {
      values.push(dataframe[i][columnName]);
    }
    return values;
  }

  else return [];
}

function loadCSV(csvFile, ignoreRows = [], ignoreCols = []) {
  let dataframe = [];
  let totalRows = 0;
  let totalColumns = 0;

  try {
    const fileContents = fs.readFileSync(csvFile, 'utf8');
    const rows = fileContents.split('\n');
    totalRows = rows.length;

    for (let i = 0; i < rows.length; i++) {
      if (ignoreRows.includes(i)) continue;

      const columns = rows[i].split(',');
      
      // Skip empty rows
      if (columns.length === 1 && columns[0].trim() === '') continue;

      // Filter out ignored columns 
      const newRow = [];
      for (let j = 0; j < columns.length; j++) {
        if (!ignoreCols.includes(j)) {
          newRow.push(columns[j].trim());
        }
      }

      // Update totalColumns based on the first valid row
      if (totalColumns === 0 && newRow.length > 0) {
        totalColumns = newRow.length;
      }

      // Add the new row to the dataframe
      if (newRow.length > 0) { // Ensure we only add non-empty rows
        dataframe.push(newRow);
      }
    }
  } catch (error) {
    console.error("Error reading the CSV file:", error);
    return [[], -1, -1];
  }

  return [dataframe, totalRows, totalColumns];
}


function createSlice(dataframe, columnindex, pattern, exportColumn){}

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