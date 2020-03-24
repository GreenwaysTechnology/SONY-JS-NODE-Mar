//non blocking io
const fs = require('fs');

const filePath = './src/assets/info.txt';
const options = {
    encoding: 'utf-8'
}
console.log('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('end')