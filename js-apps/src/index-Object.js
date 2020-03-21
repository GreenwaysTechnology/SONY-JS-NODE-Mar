//Buit in objects

//Object

const emp = {
    id: 1
}
Object.freeze(emp);
//add new Property
emp.name = 'subramanian'

console.log(emp.id, emp.name)

//Object.assign  : clone the Object  , return new object

const customer = {
    id: 1
}
const newCustomer = Object.assign({}, customer, { name: 'Subramanian', city: 'coimbatore' })
console.log(newCustomer)