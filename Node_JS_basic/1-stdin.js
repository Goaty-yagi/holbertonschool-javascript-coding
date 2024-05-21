const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');
rl.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}\r`);
  process.stdout.write('This important software is now closing\n');
  rl.close();
});
