//blocking IO
const fs = require('fs');
const path = require('path');

const options = {
    encoding: 'utf8'
}
const filePath = path.join(__dirname, 'assets/info.txt')
const writeFilePath = path.join(__dirname, 'assets/info_copy.txt')
console.log('start')
const data = fs.readFileSync(filePath, options);
console.log(data)
fs.writeFileSync(writeFilePath,'This is demo sync file io');

console.log('end');