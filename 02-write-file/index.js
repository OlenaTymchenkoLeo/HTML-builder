const {stdout, stdin, exit} = process;
const path = require('path');
const fs = require('fs');

const datafile = fs.createWriteStream(path.join('text.txt'));
console.log('Enter your messege\n');
stdin.on('data', (text) => {
    if (text.toString().trim() === 'exit') {
      exit();
    }
    datafile.write(text);
  });
  const messege = () => console.log('Goodbay');
  process.on('exit', messege);
  //process.on('SIGINT', exit);
  process.on('SIGINT', function() {
    process.exit()
})