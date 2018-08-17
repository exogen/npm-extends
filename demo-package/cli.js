const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'cool-script':
    console.log('WaaaAAaay better!', args);
    return;
  case 'test':
    console.log('shared test command!', args);
    return;
}
