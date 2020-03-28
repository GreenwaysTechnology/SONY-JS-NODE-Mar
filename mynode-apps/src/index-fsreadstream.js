const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname, 'assets/big.file')
const options = {
    encoding: 'utf-8'
}

//create read stream

const inputstream = fs.createReadStream(filePath, options);

//add events 

let data = '';
inputstream.on('data', (chunk) => {
    console.log(`chunk ${chunk.length} length`)
     console.log(chunk)
    //data += chunk;
});
inputstream.on('end', () => {
    console.log(`stream end event is called`)
   // console.log(data);
});
inputstream.on('close', (chunk) => {
    console.log(`Stream close event is called`)
});
inputstream.on('error', (err) => {
    console.log(`${err}`)
});


