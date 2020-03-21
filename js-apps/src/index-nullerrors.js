
function Employee(id = 1, name = 'Subramanian', city = 'Coimbatore', salary = 1000, da = 1000, hra = 2000) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.salary = salary
    this.da = da;
    this.hra = hra;
    //behaviours : methods
    this.calculateSalary = function () {
        return this.salary + this.hra + this.da;
    }
    this.calculateTax = function () {
        return (this.salary + this.hra + this.da) * 10 / 100
    }
}
let emp=null;
console.log(emp);
console.log(`Id ${emp.id} Name ${emp.name} city ${emp.city}`)



