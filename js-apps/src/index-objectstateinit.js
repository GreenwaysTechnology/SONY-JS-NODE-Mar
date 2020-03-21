
//state initalization

function Employee() {
    //hardcoded
    this.id = 1;
    this.name = 'Subramanian';
    this.city = 'Coimbatore';
    this.salary = 12000;
    this.da = 1000;
    this.hra = 2000;
    //behaviours : methods
    this.calculateSalary = function () {
        return this.salary + this.hra + this.da;
    }
    this.calculateTax = function () {
        return (this.salary + this.hra + this.da) * 10 / 100
    }
}
//object creation
//emp is reference variable
//new is operator
//Employee() ;; function call , constructor call
const emp = new Employee();
//Access Object Properties : using .operator / [] operator.
console.log(`Id ${emp.id} Name ${emp.name} city ${emp.city}`)
console.log(`Salary ${emp.calculateSalary()}`);
console.log(`TAX ${emp.calculateTax()}`);

//new values
emp.id =1999;
emp.name = 'Ram';
emp.city = 'Banaglore';
emp.salary =7888;
emp.da=300;
console.log(`Id ${emp.id} Name ${emp.name} city ${emp.city}`)
console.log(`Salary ${emp.calculateSalary()}`);
console.log(`TAX ${emp.calculateTax()}`);




