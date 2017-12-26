import { createInterface } from 'readline';
import chalk from 'chalk';

/**
* Input/output interface.
*
* _Интерфейс ввода/вывода._
*
* @module stdio
*/
export default {
  readln,
  readlnInt,
  write,
  writeln,
};

/**
* Reads the line entered by user. Returns a string.
*
* _Считывает строку, введённую пользователем. Возвращает строку._
*
* @memberof stdio
* @async
* @param  {string}  message
* @param  {string}  [defaultValue]  _The value to be assigned in dev mode.
*                                   Значение, которое будет присваиваться в dev-режиме._
* @return {Promise<string>}
* @example
* const password = await stdio.readln('Введите пароль: ', 'asdasd');
*/
function readln(message: string, defaultValue?: string) {
  return _readln(message, defaultValue);
}

/**
* Reads the line entered by user. Returns a number.
*
* _Считывает строку, введённую пользователем. Возвращает целое число._
*
* @memberof stdio
* @async
* @param  {string}  message
* @param  {number}  [defaultValue]  _The value to be assigned in dev mode.
*                                   Значение, которое будет присваиваться в dev-режиме._
* @throws _Will throw an error and exit if can't convert the line into number.
*         Вызовет ошибку и завершит программу, если не удастся конвертировать строку в число._
* @return {Promise<number>}
* @example
* const yearsOld = await stdio.readlnInt('Сколько Вам лет? ', 15);
*/
async function readlnInt(message: string, defaultValue?: number) {
  const line = await _readln(message, defaultValue);
  const result = parseInt(line, 10);
  if (isNaN(result)) {
    console.error(chalk.red('\nНеверный формат данных\n'));
    process.exit();
  }
  return result;
}

/**
* Print a line on the screen. Next output will start from the current line.
*
* _Вывод строки на экран. Следующий вывод начнётся с текущей строки._
*
* @memberof stdio
* @param  {string | number} message
* @example
* const result = 15;
* stdio.write('Ответ: ');   // Ответ: 15
* stdio.writeln(result);
*/
function write(message: string | number) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.write(chalk.green('' + message));
  rl.close();
}

/**
* Print a line on the screen. Next output will start from the new line.
*
* _Вывод строки на экран. Следующий вывод начнётся с новой строки._
*
* @memberof stdio
* @param  {string | number} message
* @example
* stdio.writeln('Вася');  // Вася
* stdio.writeln(2001);    // 2001
*/
function writeln(message: string | number) {
  write(message + '\n');
}

/**
* @private
*/
async function _readln(message: string, defaultValue?: string | number) {
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
}
