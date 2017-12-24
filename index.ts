import chalk from 'chalk';
import { main } from './src/main';

console.clear();
process.env.NODE_ENV = process.argv.includes('-dev')
  ? 'development'
  : 'production';

const END_LINE = '\nНажмите ' +
  chalk.underline('Enter') +
  ' или ' +
  chalk.underline('Ctrl + C') +
  ', чтобы завершить программу';

main().then(() => console.log(END_LINE));
