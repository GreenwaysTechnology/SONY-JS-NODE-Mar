//literal objects :state initalization 
//hardcoded

let emp = {
    id: 1,
    name: 'Subramanian',
    salary: 1900,
    isActive: true,
    calculateSalary() {
        return 1000
    }

};
console.log('Employee information')
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.salary}`)

emp.id = 9000
emp.name = 'ram'
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.salary}`)

console.log(`Total Salary ${emp.calculateSalary()}`)