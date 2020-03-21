
//passing object as parameter

// function printEmployee(emp) {
//     console.log(`Id ${emp.id}`)
//     console.log(`Name ${emp.name}`)
//     console.log(`Salary ${emp.salary}`)
//     console.log(`IsActive ${emp.isActive}`)
//     console.log(`City ${emp.address.city}`)
//     console.log(`State ${emp.address.state}`)
// }


// function printEmployee(emp) {
//     //Object destrucing
//     const { id, name, salary, calculateSalary, 
//         isActive, address: { city, state } } = emp;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Salary ${salary} ${calculateSalary()}`)
//     console.log(`IsActive ${isActive}`)
//     console.log(`City ${city}`)
//     console.log(`State ${state}`)
// }

// function printEmployee({ id, name, salary, calculateSalary,
//     isActive, address: { city, state } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Salary ${salary} ${calculateSalary()}`)
//     console.log(`IsActive ${isActive}`)
//     console.log(`City ${city}`)
//     console.log(`State ${state}`)
// }
const printEmployee = ({ id, name, salary, calculateSalary,
    isActive, address: { city, state } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`Salary ${salary} ${calculateSalary()}`)
    console.log(`IsActive ${isActive}`)
    console.log(`City ${city}`)
    console.log(`State ${state}`)
}


let emp = {
    id: 1,
    name: 'Subramanian',
    salary: 1900,
    isActive: true,
    //has-a
    address: {
        city: 'Chennai',
        state: 'TN'
    },
    calculateSalary() {
        return 1000
    }

};
printEmployee(emp);