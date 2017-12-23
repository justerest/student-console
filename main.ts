import stdio from './lib/stdio';

export async function main() {
  stdio.writeln('ax^2 + bx + c = 0');

  const a = <number>await stdio.readln({
    message: 'a = ',
    type: 'int',
    default: 1,
  });

  const b = <number>await stdio.readln({
    message: 'b = ',
    type: 'int',
    default: -4,
  });

  const c = <number>await stdio.readln({
    message: 'c = ',
    type: 'int',
    default: 4,
  });

  writeMember(a, true);
  stdio.write('x^2 ');
  writeMember(b);
  stdio.write('x ');
  writeMember(c);
  stdio.writeln(' = 0');

  const D = Math.pow(b, 2) - 4 * a * c;
  stdio.writeln('D = ' + D);

  if (D < 0) {
    stdio.writeln('Решений нет');
    return;
  }

  stdio.writeln('x1 = ' + (-b + D) / (2 * a));

  if (D > 0) {
    stdio.writeln('x2 = ' + (-b - D) / (2 * a));
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