const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  } else {
    let countCats = 0;
    for (i = 0; i < matrix.length; i++) {
      matrix[i].forEach((el) => {
        if (el === '^^') {
          countCats += 1;
        }
      });
    }
    if (countCats === 0) {
      return 0;
    } else {
      return countCats;
    }
  }
};

module.exports = {
  countCats
};
