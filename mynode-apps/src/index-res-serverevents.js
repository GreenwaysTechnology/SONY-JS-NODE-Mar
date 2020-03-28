const http = require('http');
const port = 3001;


const server = http.createServer((req, res) => {


    res.write('<h1>Hello</h1>');

    //response events
    res.on('finish', () => console.log('response finished'))
    res.on('close', () => console.log('Close event is called'))

    res.end();
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
