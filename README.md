# student-console

Шаблон для создания консольных программ

# lib

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [stdio](#stdio)
    -   [readln](#readln)
    -   [readlnInt](#readlnint)
    -   [write](#write)
    -   [writeln](#writeln)

## stdio

Интерфейс ввода/вывода

### readln

Считывает строку, введённую пользователем. Возвращает строку.

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `defaultValue` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** значение, которое будет присваиваться в dev-режиме

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### readlnInt

Считывает строку, введённую пользователем. Возвращает целое число.

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `defaultValue` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** значение, которое будет присваиваться в dev-режиме

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### write

Вывод строки на экран, следующий вывод начнётся с текущей строки

**Parameters**

-   `message` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** 

### writeln

Вывод строки на экран, следующий вывод начнётся с новой строки

**Parameters**

-   `message` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** 
