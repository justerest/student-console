/* eslint-disable no-console */
require('colors');
const readline = require('readline');

global.read = async params => {
  const defaultValue = params.default;
  const message = params.message || '';
  const type = params.type;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (hasDefault(params)) {
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

  if (hasDefault(params)) write('\n');

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
  if (!result || isNaN(result)) {
    console.error('\nНеправильный формат данных\n'.red);
    process.exit();
  }
  return result;
}

function hasDefault(params) {
  return process.env.NODE_ENV === 'development' && 'default' in params;
}
