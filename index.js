'use strict';

const spanish = 'spanish';
const french = 'french';

const main = (name, language) => {
  if (name === '') name = 'world!';
  return `${cfgName(language)}, ${name}`;
};

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

main('Harold');

module.exports = main;
