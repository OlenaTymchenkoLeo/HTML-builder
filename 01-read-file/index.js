const {stdout} = process;
const path = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(path.join('text.txt'));
readableStream.on('data', text => console.log(text.toString()));