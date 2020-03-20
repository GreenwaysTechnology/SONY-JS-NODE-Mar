
//iife

let result = (function (game) {
    console.log(`${game} is initalized`);
    return 'Version 1.0.0'
})('Game');
console.log(result);

let res = (game => {
    console.log(`${game} is initalized`);
    return 'Version 1.0.0'
})('Play Station');