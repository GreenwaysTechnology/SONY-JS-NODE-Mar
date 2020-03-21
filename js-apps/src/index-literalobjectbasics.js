//literal objects

let emp = {
    id: 1,
    name: 'Subramanian',
    salary: 1900,
    isActive: true,
    //methods
    //es 5
    // calculateSalary: function () {
    //     return 1000;
    // }
    //es 6
    //calculateSalary: () => 1000
    //es 6 class like methods
    calculateSalary(){
        return 1000
    }

};
console.log('Employee information')
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.salary}`)
console.log(`Total Salary ${emp.calculateSalary()}`)