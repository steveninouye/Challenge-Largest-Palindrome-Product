/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  function isAPalindrome(numString) {
    if (
      numString ===
      numString
        .split('')
        .reverse()
        .join('')
    ) {
      return true;
    }
  }

  // do your work here
  let numberArrayCreator = [1];
  for (let i = 1; i < digits; i++) {
    numberArrayCreator.push(0);
  }
  let startNumber = numberArrayCreator.join('');
  startNumber = parseInt(startNumber);

  //creating last number
  let lastNumber = numberArrayCreator.map(e => 9).join('');
  lastNumber = parseInt(lastNumber);

  for (factor0 = startNumber; factor0 <= lastNumber; factor0++) {
    for (factor1 = startNumber; factor1 <= lastNumber; factor1++) {
      let product = factor0 * factor1;
      let productString = '' + product;
      if (isAPalindrome(productString)) {
        if (product > palindromeNumber) {
          factor_0 = factor0;
          factor_1 = factor1;
          palindromeNumber = product;
        }
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
