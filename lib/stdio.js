/* eslint-disable no-console */
require('colors');
const readline = require('readline');

/**
 * Интерфейс для ввода/вывода
 * @class
 */
class stdio {
  /**
   * Метод для ввода
   * @param {ReadParams} params
   */
  async read(params) {
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
  }
  /**
   * Метод для ввода с символом конца строки
   * @param {ReadParams} params
   */
  async readln(params) {
    const result = await this.read(params);

    if (hasDefault(params)) this.write('\n');

    return result;
  }
  /**
   * Метод для вывода
   * @param {string | number} message
   */
  write(message) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.write(('' + message).green);
    rl.close();
  }
  /**
   * Метод для вывода с символом конца строки
   * @param {string | number} message
   */
  writeln(message) {
    this.write(message + '\n');
  }

}

module.exports = new stdio;

/**
 * @private
 * @param {InputTypes} type
 * @param {string | number} data
 */
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

/**
 * @private
 * @param {ReadParams} params
 */
function hasDefault(params) {
  return process.env.NODE_ENV === 'development' && 'default' in params;
}

/**
 * @typedef {'int' | 'float' | 'number' | 'string'} InputTypes
 */

/**
 * @typedef {Object} ReadParams
 * @property {InputTypes} type
 * @property {string} message
 * @property {string | number} defaultValue
 */
