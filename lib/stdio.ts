import { createInterface } from 'readline';

import chalk from 'chalk';

/**
* Input/output interface.
*
* _~~Интерфейс ввода/вывода.~~_
*
* @name stdio
*/
export default {

  /**
  * Reads the line entered by user. Returns a string.
  *
  * _~~Считывает строку, введённую пользователем. Возвращает строку.~~_
  *
  * @func stdio.readln
  * @async
  * @param  {string}  message
  * @param  {string}  [defaultValue]  _The value to be assigned in dev mode.
  *                                   ~~Значение, которое будет присваиваться в dev-режиме~~_
  * @return {Promise<string>}
  */
  readln(message: string, defaultValue?: string) {
    return this._readln(message, defaultValue);
  },

  /**
  * Reads the line entered by user. Returns a number.
  *
  * ~~Считывает строку, введённую пользователем. Возвращает целое число.~~
  *
  * @func stdio.readlnInt
  * @async
  * @param  {string}  message
  * @param  {number}  [defaultValue]  _The value to be assigned in dev mode.
  *                                   ~~Значение, которое будет присваиваться в dev-режиме~~_
  * @throws _Will throw an error and exit if can't convert the line into number.
  *         ~~Вызовет ошибку и завершит программу, если не удастся конвертировать строку в число~~_
  * @return {Promise<number>}
  */
  async readlnInt(message: string, defaultValue?: number) {
    const line = await this._readln(message, defaultValue);
    const result = parseInt(line, 10);
    if (isNaN(result)) {
      console.error(chalk.red('\nНеверный формат данных\n'));
      process.exit();
    }
    return result;
  },

  /**
  * Print a line on the screen. Next output will start from the current line.
  *
  * _~~Вывод строки на экран. Следующий вывод начнётся с текущей строки.~~_
  *
  * @func stdio.write
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
  * _~~Вывод строки на экран. Следующий вывод начнётся с новой строки.~~_
  *
  * @func stdio.writeln
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
