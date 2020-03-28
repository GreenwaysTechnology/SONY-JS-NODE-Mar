//Web Application
const http = require('http');

const port = 3001;
/**
 * 
 * @param {*} req  
 *  which is variable holding http.ClientRequest object reference
 * @param {*} res 
 *  which is variable holding http.ServerObject object reference

 */
// const httpHandler = function (req, res) {
//     //client Request handling
//     //sending response
//     res.write('<h1>Hello</h1>');
//     //close the http stream
//     res.end();
// };
//create Server
const server = http.createServer((req, res) => {
    //client Request handling
    //sending response
    res.write('<h1>Hello</h1>');
    //close the http stream
    res.end();
});

//start the server
server.listen(port, () => {
    console.log(`Server is started!`);
});