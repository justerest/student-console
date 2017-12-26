import chalk from 'chalk';
import { main } from './src/main';

console.clear();
process.env.NODE_ENV = process.argv.includes('-dev')
  ? 'development'
  : 'production';

main().then(() => console.log(`
Нажмите ${chalk.underline('Enter')} или ${chalk.underline('Ctrl + C')}, \
чтобы завершить программу
`));
