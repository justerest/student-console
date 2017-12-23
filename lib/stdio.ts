/* eslint-disable no-console */
import { createInterface } from 'readline';

import chalk from 'chalk';

/**
* Интерфейс ввода/вывода
* @name stdio
*/
export default {

  /**
  * Считывает строку, введённую пользователем. Возвращает строку.
  * @param {string} message
  * @param {string} [defaultValue] значение, которое будет присваиваться в dev-режиме
  * @return {string}
  */
  readln(message: string, defaultValue?: string) {
    return this._readln(message, defaultValue);
  },

  /**
  * Считывает строку, введённую пользователем. Возвращает целое число.
  * @param {string} message
  * @param {number} [defaultValue] значение, которое будет присваиваться в dev-режиме
  * @return {number}
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
  * Вывод строки на экран, следующий вывод начнётся с текущей строки
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
  * Вывод строки на экран, следующий вывод начнётся с новой строки
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
