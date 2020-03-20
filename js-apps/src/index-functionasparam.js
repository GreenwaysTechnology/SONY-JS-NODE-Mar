//function as parameter to another function

//connect =function(){}
function startServer(connect) {
    const result = connect('HTTP');
    console.log(result);
}

startServer(function (name) {
    // console.log(`${name} Server Started!`);
    return `${name} Server Started!`
});
///////////////////////////////////////////////////////////////////

function startClient(connect) {
    connect('Mobile');
}
let handler = function (name) {
    console.log(`${name} Client is ready!`);
};
startClient(handler);
