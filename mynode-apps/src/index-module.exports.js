const firstName = require('./libs/variablereturn');
const greet = require('./libs/greeter');
const employees = require('./libs/employees');
const Customer = require('./libs/Customer');

console.log(firstName)
console.log(greet());
console.log(employees)
let { id, name } = new Customer(1, 'subramanian')
console.log(id, name);