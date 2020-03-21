//Object returning and destrucing


// function getEmployee(id = 1, name = 'Subramanian', isActive = false, salary = 1900, city = 'Chennai', state = 'TN') {
//     return {
//         id: id,
//         name: name,
//         salary: salary,
//         isActive: isActive,
//         //has-a
//         address: {
//             city: city,
//             state: state
//         }
//     };
// }

// function getEmployee(id = 1, name = 'Subramanian', isActive = false, salary = 1900, city = 'Chennai', state = 'TN') {

//     //If key:localvariable is same eg id:id - Make it one, remove any one
//     return {
//         id,
//         name,
//         salary,
//         isActive,
//         //has-a
//         address: {
//             city,
//             state
//         }
//     };
// }
//Arrow version
const getEmployee = (id = 1, name = 'Subramanian',
    isActive = false, salary = 1900, city = 'Chennai', state = 'TN') => ({
        id,
        name,
        salary,
        isActive,
        address: {
            city,
            state
        }
    });


const { id, name, salary, calculateSalary,
    isActive, address: { city, state } } = getEmployee();
console.log(`Id ${id}`)
console.log(`Name ${name}`)
console.log(`Salary ${salary} `)
console.log(`IsActive ${isActive}`)
console.log(`City ${city}`)
console.log(`State ${state}`)