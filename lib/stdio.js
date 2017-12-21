/* eslint-disable no-console */
require('colors');
const readline = require('readline');

process.env.NODE_ENV = process.argv.includes('-dev') && 'development';

console.clear();

global.read = async params => {
  const defaultValue = params.default;
  const message = params.message || '';
  const type = params.type;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (defaultValue && process.env.NODE_ENV === 'development') {
    rl.write(message.blue);
    rl.write(JSON.stringify(defaultValue));
    rl.close();
    return returnTypedData(type, defaultValue);
  }

  return new Promise(resolve => rl.question(message.blue, line => {
    resolve(returnTypedData(type, line));
    rl.close();
  }));
};

global.readln = async params => {
  const result = await read(params);
  if (process.env.NODE_ENV === 'development') write('\n');
  return result;
};

global.write = message => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.write(('' + message).green);
  rl.close();
  rl.close();
};

global.writeln = message => write(message + '\n');

function returnTypedData(type, data) {
  const result = (
    type === 'int' || type === 'integer' ? parseInt(data) :
    type === 'float' || type === 'digit' || type === 'number' ? parseFloat(data) :
    data
  );
  console.assert(!isNaN(result), 'Wrong input data'.red);
  return result;
}
