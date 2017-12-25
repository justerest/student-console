import stdio from '../lib/stdio';

const ANY_ROOTS = 'x - любое число';
const NO_ROOTS = 'Корней нет';

export async function main() {
  stdio.writeln('Программа Для Решения Онлайн Уравнений');
  stdio.writeln('ax^2 + bx + c = 0');

  const a = await stdio.readlnInt('a = ', 3);
  const b = await stdio.readlnInt('b = ', 15);
  const c = await stdio.readlnInt('c = ', 0);

  writeMember(a, true);
  stdio.write('x^2 ');
  writeMember(b);
  stdio.write('x ');
  writeMember(c);
  if (Math.abs(c) === 1) {
    stdio.write(1);
  }
  stdio.writeln(' = 0');

  if (a === 0 && b === 0) {
    if (c === 0) {
      stdio.writeln(ANY_ROOTS);
    }
    else {
      stdio.writeln(NO_ROOTS);
    }
    return;
  }
  if (a === 0) {
    stdio.write('x1 = ');
    stdio.writeln(- c / b);
    return;
  }
  if (b === 0) {
    const x = -c / a;
    if (x >= 0) {
      stdio.writeln('x1 = ' + (Math.sqrt(x)));
      stdio.writeln('x2 = ' + (-Math.sqrt(x)));
    }
    else {
      stdio.writeln(NO_ROOTS);
    }
    return;
  }
  if (c === 0) {
    stdio.writeln('x1 = 0');
    stdio.writeln('x2 = ' + (-b / a));
    return;
  }

  const D = Math.pow(b, 2) - 4 * a * c;
  stdio.writeln('D = ' + D);

  if (D < 0) {
    stdio.writeln(NO_ROOTS);
    return;
  }

  stdio.writeln('x1 = ' + (-b + Math.sqrt(D)) / (2 * a));

  if (D > 0) {
    stdio.writeln('x2 = ' + (-b - Math.sqrt(D)) / (2 * a));
  }
}

function writeMember(number: number, isWithoutPlus = false) {
  const mod = Math.abs(number);

  if (number >= 0 && !isWithoutPlus) {
    stdio.write('+ ');
  }
  if (number < 0) {
    stdio.write('- ');
  }
  if (mod !== 1) {
    stdio.write(mod);
  }
}
