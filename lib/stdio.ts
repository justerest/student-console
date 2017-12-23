/* eslint-disable no-console */
import { createInterface } from 'readline';

import chalk from 'chalk';

type InputTypes = 'int' | 'float' | 'string';

interface ReadParams {
  type: InputTypes;
  message: string;
  default: string | number;
}

/**
* Интерфейс для ввода/вывода
* @name stdio
*/
export default {

  /**
  * Метод для ввода
  * @param {Object} params
  * @param {'int' | 'float' | 'string'} params.type
  * @param {string} params.message
  * @param {string | number} params.default
  */
  async read(params: ReadParams) {
    const defaultValue = params.default;
    const message = params.message || '';
    const type = params.type;

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    if (hasDefault(params)) {
      rl.write(chalk.blue(message));
      rl.write(JSON.stringify(defaultValue));
      rl.close();
      return returnTypedData(type, defaultValue);
    }

    return new Promise<string | number>(resolve => rl.question(chalk.blue(message), line => {
      resolve(returnTypedData(type, line));
      rl.close();
    }));
  },

  /**
  * Метод для ввода с символом конца строки
  * @param {Object} params
  * @param {'int' | 'float' | 'string'} params.type
  * @param {string} params.message
  * @param {string | number} params.default
  */
  async readln(params: ReadParams) {
    const result = await this.read(params);

    if (hasDefault(params)) {
      this.write('\n');
    }

    return result;
  },

  /**
   * Метод для вывода
   * @param {string | number} message
   */
  write(message: string | number) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.write(chalk.green('' + message));
    rl.close();
  },

  /**
  * Метод для вывода с символом конца строки
  * @param {string | number} message
  */
  writeln(message: string | number) {
    this.write(message + '\n');
  },

};

function returnTypedData(type: InputTypes, data: string | number) {
  const result = (
    type === 'int' ? parseInt(<string>data, 10) :
      type === 'float' ? parseFloat(<string>data) :
        data
  );
  if (!result) {
    console.error(chalk.red('\nНеправильный формат данных\n'));
    process.exit();
  }
  return result;
}

function hasDefault(params: ReadParams) {
  return process.env.NODE_ENV === 'development' && 'default' in params;
}
