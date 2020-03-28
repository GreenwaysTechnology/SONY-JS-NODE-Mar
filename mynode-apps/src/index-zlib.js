const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/bigfile.gz');
const config = {
    encoding: 'UTF-8'
}
//create zGzip alogrthim
const gzip = zlib.createGzip();

const inputstream = fs.createReadStream(inputfileName, config);
const outputstream = fs.createWriteStream(outputfileName, config);

//compressing
inputstream.pipe(gzip).pipe(outputstream)