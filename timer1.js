const timesToBeep = process.argv.slice(2);

if (!timesToBeep.length) {
  process.exit();
}

for (let beep of timesToBeep) {
  beep = Number(beep);
  if (typeof beep === 'number' && beep > 0) {
    let scheduledTime = beep * 1000;
    setTimeout(() => process.stdout.write('\x07'), scheduledTime);
  }
}

