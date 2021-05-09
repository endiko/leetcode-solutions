/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {  // O(n*m) / O(1)
  let isCol = false;
  const 
    rows = matrix.length,
    cols = matrix[0].length;

  // сделали засечки в каких строке и столбце будут нули
  for(let i = 0; i < rows; i++) {
    if(matrix[i][0] === 0) {
      isCol = true;
    }
    for(let j = 1; j < cols; j++) {
      if(matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // если в i строке или в j столбце есть 0, то меняем текущий элемент на 0
  for(let i = 1; i < rows; i++) {
    for(let j = 1; j < cols; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // если 0 элемент равен 0, то заполняем нулями всю 1 строку
  if(matrix[0][0] === 0) {
    for(let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // if в 1 колонке есть 0 хотя бы на 1 строке, заполняем всю 1 колонку нулями
  if(isCol) {
    for(let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

module.exports = setZeroes;
// setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]])
