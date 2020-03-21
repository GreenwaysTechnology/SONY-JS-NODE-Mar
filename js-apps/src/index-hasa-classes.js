class Address {
    constructor(doorno = '1', street = 'street', city = 'city', state = 'state', zipcode = 'zipcode') {
        this.street = street
        this.doorno = doorno
        this.city = city;
        this.state = state;
        this.zipcode = zipcode
    }
}

class Employee {
    constructor(id = 1, name = 'defaultName', address = new Address()) {
        this.id = id;
        this.name = name;
        //has-a 
        this.address = address;
    }
}
let emp = null;

emp = new Employee();
console.log(`Id ${emp.id} Name ${emp.name} ${emp.address.city}`)

let address = new Address('23', '10 th street', 'chennai', 'TN', '600002')
emp = new Employee(34, 'John', address);
console.log(`Id ${emp.id} Name ${emp.name} ${emp.address.city}`)

emp = new Employee(34, 'John', new Address('23', '10 th street', 'chennai', 'TN', '600002'));
console.log(`Id ${emp.id} Name ${emp.name} ${emp.address.city}`)