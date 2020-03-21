//

class Employee {
    //instance variables
    id = 1;
    name = 'Subramanian'
    //methods
    calculateSalary() {
        return 1000;
    }
    calculateTAX = () => 3000;
}
let emp = new Employee();
console.log(`Id ${emp.id}  salary ${emp.calculateSalary()} ${emp.calculateTAX()}` );