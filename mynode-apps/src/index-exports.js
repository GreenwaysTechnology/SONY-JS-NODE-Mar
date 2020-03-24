//how to link
// const result = require('./libs/mylib')

// console.log(result);

// console.log(result.name)
// console.log(result.id);
// console.log(result.skills);
// console.log(result.isActive);
// console.log(result.calculate())

const { name, id, skills, isActive, calculate } = require('./libs/mylib')
console.log(name)
console.log(id);
console.log(skills);
console.log(isActive);
console.log(calculate())