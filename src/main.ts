import stdio from '../lib/stdio';

export async function main() {

  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = i + 1;
  }
  for (let i = 0; i < 10; i++) {
    stdio.write(arr[i] + ', ');
  }

}

