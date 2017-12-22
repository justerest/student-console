require('./lib/stdio');

module.exports = async function main() {
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

  writeMember(a, 'without plus');
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
};

function writeMember(number, isWithoutPlus) {
  const mod = Math.abs(number);

  if (number >= 0 && !isWithoutPlus) write('+ ');
  else write('- ');
  if (mod !== 1) write(mod.toString().bold);
}
