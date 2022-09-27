const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Welcome to timer app! Please input a number from 1-9 to set a timer,\n or press 'b' to make a beep! Press CTRL + C at any time to exit");

stdin.on('data', (key) => {
  let time = Number(key);
  if (typeof time === 'number' && time > 0 && time < 10) {
    process.stdout.write(`\nSetting timer for ${key} seconds... `);
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('beep');
    }, time * 1000);
  }
  if (key === '\u0003') {
    console.log("\nthank you for using timer app!");
    process.exit();
  }
  if (key === 'b') {
    console.log('\nbeep');
    process.stdout.write('\x07');
  }
});