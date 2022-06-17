'use strict';

const spanish = 'spanish';
const french = 'french';

function main(name, language) {
  if (name === '') name = 'world!';
  return `${cfgName(language)}, ${name}`;
}

const cfgName = (language) => {
  let prefix = '';
  switch (language) {
    case spanish:
      prefix = 'Hola';
      break;
    case french:
      prefix = 'Bonjour';
      break;
    default:
      prefix = 'Hello';
      break;
  }
  return prefix;
};

console.log(main('', '')); // Hello, world!
console.log(main('Harold', '')); // Hello, Harold
console.log(main('Harold', 'spanish')); // Hola, Harold
console.log(main('Harold', 'french')); // Bonjour, Harold

module.exports = main;
