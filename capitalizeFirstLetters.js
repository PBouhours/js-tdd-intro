const assert = require('assert');

//funtion



assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters('t'), 'T');
assert.strictEqual(capitalizeFirstLetters(''), '');

