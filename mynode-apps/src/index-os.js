const {arch,hostname,platform} = require('os')

console.log('Operating System information');
console.log(arch())
console.log(hostname())
console.log(platform())