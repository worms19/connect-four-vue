export const findSmallestIndex = (id, items) => {
  let rowIndex = 5;
  while (rowIndex >= 0) {
    if (items[rowIndex][id] === 'E') {
      return rowIndex;
    }
    rowIndex--;
  }
};

export const verifyWin = (items, rowIndex, colIndex) => {
  const color = items[rowIndex][colIndex];
  if (verifyRow(items, rowIndex, colIndex, color) >= 4) return true;
  if (verifyColumn(items, rowIndex, colIndex, color) >= 4) return true;
  if (verifyDiag(items, rowIndex, colIndex, color) >= 4) return true;
  if (verifyDiag2(items, rowIndex, colIndex, color) >= 4) return true;

  return false;
};
const verifyRow = (items, rowIndex, colIndex, color) => {
  let number = 0;
  let indexToVerify = colIndex;

  while (
    items[rowIndex][indexToVerify] &&
    items[rowIndex][indexToVerify] === color
  ) {
    number++;
    indexToVerify++;
  }
  indexToVerify = colIndex - 1;
  while (
    items[rowIndex][indexToVerify] &&
    items[rowIndex][indexToVerify] === color
  ) {
    number++;
    indexToVerify--;
  }
  return number;
};

const verifyColumn = (items, rowIndex, colIndex, color) => {
  let number = 0;
  let indexToVerify = rowIndex;

  while (
    items[indexToVerify] &&
    items[indexToVerify][colIndex] &&
    items[indexToVerify][colIndex] === color
  ) {
    number++;
    indexToVerify++;
  }
  return number;
};

const verifyDiag = (items, rowIndex, colIndex, color) => {
  let number = 0;
  let colToverify = colIndex;
  let rowToVerify = rowIndex;

  while (
    items[rowToVerify] &&
    items[rowToVerify][colToverify] &&
    items[rowToVerify][colToverify] === color
  ) {
    number++;
    colToverify++;
    rowToVerify--;
  }
  colToverify = colIndex - 1;
  rowToVerify = rowIndex + 1;

  while (
    items[rowToVerify] &&
    items[rowToVerify][colToverify] &&
    items[rowToVerify][colToverify] === color
  ) {
    number++;
    colToverify--;
    rowToVerify++;
  }
  return number;
};
const verifyDiag2 = (items, rowIndex, colIndex, color) => {
  let number = 0;
  let colToverify = colIndex;
  let rowToVerify = rowIndex;

  while (
    items[rowToVerify] &&
    items[rowToVerify][colToverify] &&
    items[rowToVerify][colToverify] === color
  ) {
    number++;
    colToverify++;
    rowToVerify++;
  }
  colToverify = colIndex - 1;
  rowToVerify = rowIndex - 1;
  while (
    items[rowToVerify] &&
    items[rowToVerify][colToverify] &&
    items[rowToVerify][colToverify] === color
  ) {
    number++;
    colToverify--;
    rowToVerify--;
  }
  return number;
};
