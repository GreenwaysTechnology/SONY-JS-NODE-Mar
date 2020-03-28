const fs = require('fs');
const path = require('path');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/big_copy.file');

const config = {
    encoding: 'UTF-8'
}

const readerStream = fs.createReadStream(inputfileName, config);
const writeStr = fs.createWriteStream(outputfileName, config);


//Back pressure handling
/**
 * with pause and resume
 * drain event
 */
readerStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    let buffer_good = writeStr.write(chunk);
    //close the inputstream if buffer is full!
    if (!buffer_good) readerStream.pause();
});

writeStr.on('drain', function () {
    console.log('buffer drained!');
    //open the inputstream if buffer is empty
    readerStream.resume();
});

readerStream.on('end', function () {
    //console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});