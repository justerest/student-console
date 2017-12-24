/* eslint-disable no-console */
import { createInterface } from 'readline';

import chalk from 'chalk';

/**
* Input/output interface.
*
* ~~Интерфейс ввода/вывода.~~
* @name stdio
*/
export default {

  /**
  * Reads the line entered by user. Returns a string.
  *
  * ~~Считывает строку, введённую пользователем. Возвращает строку.~~
  * @async
  * @param {string} message
  * @param {string} [defaultValue] значение, которое будет присваиваться в dev-режиме (the value to be assigned in dev mode)
  * @return {Promise<string>}
  */
  readln(message: string, defaultValue?: string) {
    return this._readln(message, defaultValue);
  },

  /**
  * Reads the line entered by user. Returns a number.
  *
  * ~~Считывает строку, введённую пользователем. Возвращает целое число.~~
  * @async
  * @param {string} message
  * @param {number} [defaultValue] значение, которое будет присваиваться в dev-режиме (the value to be assigned in dev mode)
  * @return {Promise<number>}
  */
  async readlnInt(message: string, defaultValue?: number) {
    const line = await this._readln(message, defaultValue);
    const result = parseInt(line, 10);
    if (isNaN(result)) {
      console.error(chalk.red('\nНеправильный формат данных\n'));
      process.exit();
    }
    return result;
  },

  /**
  * Print a line on the screen. Next output will start from the current line.
  *
  * ~~Вывод строки на экран. Следующий вывод начнётся с текущей строки.~~
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
  * Print a line on the screen. Next output will start from the new line.
  *
  * ~~Вывод строки на экран. Следующий вывод начнётся с новой строки.~~
  * @param {string | number} message
  */
  writeln(message: string | number) {
    this.write(message + '\n');
  },

  async _readln(message: string, defaultValue?: string | number) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const hasDefault = (
      process.env.NODE_ENV === 'development' &&
      typeof defaultValue !== 'undefined'
    );
    if (hasDefault) {
      rl.write(chalk.blue(message) + JSON.stringify(defaultValue) + '\n');
      rl.close();
      return JSON.stringify(defaultValue);
    }

    return new Promise<string>(resolve => rl.question(chalk.blue(message), line => {
      resolve(line);
      rl.close();
    }));
  },

};
