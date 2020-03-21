

function Employee(id = 1) {
    //instance variable
    this.id = id;
}

//Getting Employee's Prototype
console.dir(Employee.prototype);

//Add sharable properties on prototype ,so that all instance can get the data
Employee.prototype.firstName = 'foo'
Employee.prototype.calculateSalary = function () {
    return 1000;
}

let emp = null;

emp = new Employee() //new Instance from Employee Function Object
emp.id = 9000;
//overriding
emp.calculateSalary = function () {
    return 67800;
}


console.log(emp.id, emp.firstName, emp.calculateSalary())

emp = new Employee() //new Instance from Employee Function Object
console.log(emp.id, emp.firstName, emp.calculateSalary())

emp = new Employee() //new Instance from Employee Function Object
console.log(emp.id, emp.firstName, emp.calculateSalary())
