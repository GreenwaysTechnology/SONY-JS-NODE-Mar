const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const util = require('util');
const stream = require('stream');
//promise pipe line

//convert stream.pipeline method with promise powered
const pipeline = util.promisify(stream.pipeline);

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/bigfile.gz');
const config = {
    encoding: 'UTF-8'
}

//async function
async function startApp() {
    try {

        await pipeline(
            fs.createReadStream(inputfileName, config),
            zlib.createGzip(),
            fs.createWriteStream(outputfileName, config)
        );
        console.log(`Pipeline succeeded!`);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!')
    }
}
startApp();