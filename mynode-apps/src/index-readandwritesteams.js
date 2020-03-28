//read + write 
const fs = require('fs');
const path = require('path');

const config = {
    encoding: 'UTF-8'
}
const inputFileName = path.join(__dirname, 'assets/info.txt');
const outputFileName = path.join(__dirname, 'assets/greeter.txt');

//Streams 
const inputStream = fs.createReadStream(inputFileName, config);
const outputStream = fs.createWriteStream(outputFileName, config);

//Register data event.
inputStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    outputStream.write(chunk);
});


//end event
inputStream.on('end', function () {
    console.log('There will be no more data to read!');
    outputStream.close();
})

//error event: for error handling
inputStream.on('error', function (err) {
    console.log(`Some thing went wrong! ${err}`)
});

outputStream.on('close', function () {
    console.log(`File write operation is completed`);
});