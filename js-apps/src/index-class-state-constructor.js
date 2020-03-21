//state intialization in classes

//

class Employee {
    //instance variables
    constructor(id = 1, name = 'defaultName') {
        this.id = id;
        this.name = name;
    }
    //methods
    calculateSalary() {
        return 1000;
    }
    calculateTAX = () => 3000;
}
let emp = null;
emp = new Employee();
console.log(`Id ${emp.id} ${emp.name}  salary ${emp.calculateSalary()} ${emp.calculateTAX()}`);
//after object creation
emp = new Employee();
emp.id = 90000;
emp.name = 'john'
console.log(`Id ${emp.id} ${emp.name}  salary ${emp.calculateSalary()} ${emp.calculateTAX()}`);

//constructor params
emp = new Employee(45, 'Kumar');
console.log(`Id ${emp.id} ${emp.name}  salary ${emp.calculateSalary()} ${emp.calculateTAX()}`);
