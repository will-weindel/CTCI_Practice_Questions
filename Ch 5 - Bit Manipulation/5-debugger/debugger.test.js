const debugger = require('./debugger');


for (var i = 1; i < 10000; i++) {
  if (mysteriousFunction(i)) {
    console.log(i);
  }
}

console.log('hypothesis, returns true only for 2 ^ n only in the case of 1000, 1000 - 1 is 0111, and n & (n - 1) === 0')

console.log(mysteriousFunction(Math.pow(2, 1)), true);
console.log(mysteriousFunction(Math.pow(2, 1) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 2)), true);
console.log(mysteriousFunction(Math.pow(2, 2) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 3)), true);
console.log(mysteriousFunction(Math.pow(2, 3) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 4)), true);
console.log(mysteriousFunction(Math.pow(2, 4) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 5)), true);
console.log(mysteriousFunction(Math.pow(2, 5) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 6)), true);
console.log(mysteriousFunction(Math.pow(2, 6) + 1), false);
console.log(mysteriousFunction(Math.pow(2, 7)), true);
console.log(mysteriousFunction(Math.pow(2, 7) + 1), false);


test('Basic debugger test', () => {
  expect('This test is only to make you look at the console logs, comment this test out to pass')toBe('false')
  expect(true)toBe(true)
});
