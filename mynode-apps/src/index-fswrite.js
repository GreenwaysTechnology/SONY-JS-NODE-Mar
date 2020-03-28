const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'assets/grains.txt');

const config = {
    encoding: 'utf8',
    flag: 'w'
};
const grains = ['wheat', 'rice', 'oats'];

const outputStream = fs.createWriteStream(fileName, config);

while (grains.length) {
    let data = grains.pop() + " ";
    outputStream.write(data);
    console.log("Wrote: %s", data);
}
outputStream.close();

outputStream.on('close', function () {
    console.log('file write operation is completed')
});
outputStream.on('open', function () {
    console.log('file is opened for write')
});

outputStream.on('ready', function () {
    console.log('file write operation is ready!')
});