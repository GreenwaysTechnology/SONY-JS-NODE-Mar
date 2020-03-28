const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { pipeline } = require('stream');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/bigfile.gz');
const config = {
    encoding: 'UTF-8'
}

//pipline method takes parameter

pipeline(
    fs.createReadStream(inputfileName, config),
    zlib.createGzip(),
    fs.createWriteStream(outputfileName, config),
    err => {
        if (err) {
            console.log(`pipeline failed ${err}`)
        }
        console.log(`Pipeline succeeded!`);
    }
);
