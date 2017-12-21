require('./lib/stdio');

async function main() {
  writeln('ax^2 + bx + c = 0');

  const a = await readln({
    message: 'a = ',
    type: 'number',
    default: 1,
  });
  const b = await readln({
    message: 'b = ',
    type: 'number',
    default: -4,
  });
  const c = await readln({
    message: 'c = ',
    type: 'number',
    default: 4,
  });

  writeMember(a, 'first');
  write('x^2 ');
  writeMember(b);
  write('x ');
  writeMember(c);
  writeln(' = 0');

  const D = Math.pow(b, 2) - 4 * a * c;
  writeln('D = ' + D);

  if (D < 0) {
    writeln('Решений нет');
    return;
  }

  writeln('x1 = ' + (-b + D) / (2 * a));

  if (D > 0) {
    writeln('x2 = ' + (-b - D) / (2 * a));
  }
}

const HAPPY_END = '\nНажмите ' +
  'Enter'.underline +
  ' или ' +
  'Ctrl + C'.underline +
  ', чтобы завершить программу';

main().then(() => writeln(HAPPY_END.white));

function writeMember(number, isFirst) {
  const plus = isFirst ? '' : '+ ';
  if (number === 1) {
    write(plus);
  } else if (number === 0) {
    write(plus + number);
  } else if (number > 0) {
    write(plus + number);
  } else if (number < 0) {
    write('- ' + Math.abs(number));
  }
}
