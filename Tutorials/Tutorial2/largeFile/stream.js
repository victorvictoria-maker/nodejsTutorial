const path = require('path');
const fs = require('fs');
const readStream = fs.createReadStream(path.join(__dirname, 'lorem.txt'), {encoding: 'utf-8'});
const writeStream = fs.createWriteStream(path.join(__dirname, 'fromStream.txt'));

// readStream.on('data', (dataChunk) => {
//     writeStream.write(dataChunk);
//     console.log(dataChunk);
// })

// this below is more efficient
readStream.pipe(writeStream);