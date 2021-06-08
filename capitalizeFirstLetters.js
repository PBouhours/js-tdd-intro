const assert = require('assert');

//funtion
function capitalizeFirstLetters(text){
  
    return text.length > 0 
    ? text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ') 
    : ''
  
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters('t'), 'T');
assert.strictEqual(capitalizeFirstLetters(''), '');

