# student-console

Template for create console programs.

~~Шаблон для создания консольных программ.~~

# Install

```bash
git clone https://github.com/justerest/student-console.git
cd student-console
npm install
npm run dev
```

# Usage

```bash
npm run dev       # run program in dev mode ~~запуск программы в режиме разработки~~
npm run test      # run program in prod mode ~~запуск программы в режиме реального пользования~~
npm run build     # build program into .exe ~~компиляция программы в .exe файл~~
```

# lib

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [stdio](#stdio)
    -   [readln](#readln)
    -   [readlnInt](#readlnint)
    -   [write](#write)
    -   [writeln](#writeln)

## stdio

Input/output interface.

~~Интерфейс ввода/вывода.~~

### readln

Reads the line entered by user. Returns a string.

~~Считывает строку, введённую пользователем. Возвращает строку.~~

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `defaultValue` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the value to be assigned in dev mode ~~значение, которое будет присваиваться в dev-режиме~~

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

### readlnInt

Reads the line entered by user. Returns a number.

~~Считывает строку, введённую пользователем. Возвращает целое число.~~

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `defaultValue` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** the value to be assigned in dev mode ~~значение, которое будет присваиваться в dev-режиме~~

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** 

### write

Print a line on the screen. Next output will start from the current line.

~~Вывод строки на экран. Следующий вывод начнётся с текущей строки.~~

**Parameters**

-   `message` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** 

### writeln

Print a line on the screen. Next output will start from the new line.

~~Вывод строки на экран. Следующий вывод начнётся с новой строки.~~

**Parameters**

-   `message` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** 
