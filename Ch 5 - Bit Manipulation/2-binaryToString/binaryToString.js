/*
 Given a real number between O and 1 (e.g., 0.72) that is passed in as a double, print
the binary representation. If the number cannot be represented accurately in binary with at most 32
characters, print "ERROR:'
*/

// I - a decimal (double or float)
// O - a string representation of the decimal in binary
// C - Time | Space
// E - 0

// decimals in binary work like 2 ** -1 (.5), 2 ** -2 (.25), 2 ** -3 (.125).... so on
// if binary val is smaller than num, subtract binary val, add one to a cache
// else add 0

var binaryToString = function (num) {
  let bitCache = ['0.'];
  let exponent = -1;

  while (bitCache.length < 32 && num > 0) {
    let binaryValue = 2 ** exponent;

    if (binaryValue <= num) {
      bitCache.push(1);
      num -= binaryValue;
    }
    else {
      bitCache.push(0);
    }

    exponent--;
  }

  return (num > 0) ? 'ERROR' : bitCache.join('');
};

// below is an alternative solution
// it uses an accumulator to add decimals
// it then returns the value as a string

const convertBinaryToString = function(num) {
  let accumulator = 0;
  let binaryFactor = 0;

  while (binaryFactor < 32 && num > 0) {
    binaryFactor++;
    let decimalBinary = (1 / 2 ** binaryFactor);

    if (decimalBinary <= num) {
      accumulator += decimalBinary;
      num -= decimalBinary;
    }
  }

  return accumulator.toString(2);
}

module.exports = binaryToString;
