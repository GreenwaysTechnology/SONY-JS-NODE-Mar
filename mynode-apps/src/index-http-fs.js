const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;

//Read disk file and send to clients

//const filePath = path.join(__dirname, 'assets/big.file')
const filePath = path.join(__dirname, 'assets/info.txt')

const options = {
    encoding: 'utf-8'
}

const inputstream = fs.createReadStream(filePath, options);

const server = http.createServer((req, res) => {

    //read file using no streaming api
    /**fs.readFile(filePath, options, (err, data) => {
        if (err) {
            reject(err);
        }
        res.write(data);
        res.end();
    });
    **/
    //read file using streaming api with back pressure:pipe
    inputstream.pipe(res);
    inputstream.on('end', function () {
        console.log('Streaming is over')
        res.end()
    });

    //response events
    res.on('finish', () => console.log('response finished'))
    res.on('close', () => console.log('Close event is called'))

});

//start the server
server.listen(port, () => {
    console.log(`Server is started!`);
});

//server events
server.on('request', (req, res) => {
    //console.log(req);
    console.log(`Path  ${req.url} Method ${req.method}`)
});