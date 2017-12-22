/* eslint-disable no-console */
console.clear();
process.env.NODE_ENV = process.argv.includes('-dev') && 'development';

require('colors');

const END_LINE = '\nНажмите ' +
  'Enter'.underline +
  ' или ' +
  'Ctrl + C'.underline +
  ', чтобы завершить программу';

require('./main.js')().then(() => console.log(END_LINE.white));
