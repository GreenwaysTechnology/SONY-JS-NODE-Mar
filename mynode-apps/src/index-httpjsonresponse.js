const http = require('http');
const TODOS = require('./mock-data/Todos');


const port = 3001;

const server = http.createServer((req, res) => {

    //set response header
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(TODOS));
    res.end();
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