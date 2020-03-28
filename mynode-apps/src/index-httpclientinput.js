const http = require('http');
const port = 3001;


const server = http.createServer((req, res) => {

    //reading data from the client
    let data = ''
    req.on('data', chunk => {
        console.log(chunk.toString());
        data += chunk
    });
    //sending data to client which is received : eco
    req.on('end', () => {
        res.write(data);
        res.end();
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
