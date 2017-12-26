import stdio from '../lib/stdio';

export async function main() {
  stdio.writeln('ax^2 + bx + c = 0');

  const a = await stdio.readlnInt('a = ', 1);
  const b = await stdio.readlnInt('b = ', -4);
  const c = await stdio.readlnInt('c = ', 4);

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

  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  stdio.write('x1 = ');
  stdio.writeln(x1);

  if (D > 0) {
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    stdio.write('x2 = ');
    stdio.writeln(x2);
  }
}

function writeMember(member: number, isWithoutPlus?: true) {
  const mod = Math.abs(member);

  if (member >= 0 && !isWithoutPlus) {
    stdio.write('+ ');
  }
  if (member < 0) {
    stdio.write('- ');
  }
  if (mod !== 1) {
    stdio.write(mod);
  }
}
