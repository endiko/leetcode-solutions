const spiralMatrixToCenter = (n) => {
  // Create matrix and fill it with '-'
  const arr = Array(n).fill('-').map(() => Array(n).fill('-'));

  let count = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {

    // top row
    for(let i = startColumn; i <= endColumn; i++) {
      arr[startRow][i] = count;
      count++;
    }
    startRow++;

    // right column
    for(let i = startRow; i<= endRow; i++) {
      arr[i][endColumn] = count;
      count++;
    }
    endColumn--;

    // bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      arr[endRow][i] = count;
      count++;
    }
    endRow--;

    // left column
    for(let i = endRow; i >= startRow; i--) {
      arr[i][startColumn] = count;
      count++;
    }

    startColumn++;
  }

  console.log(arr)
  return arr;
}

spiralMatrixToCenter(5);
