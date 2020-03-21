//Array Objects

//how to declare basic prmitive arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//Iterate :
//for..loop : dont use
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//iterators: for..each
numbers.forEach((i, index) => console.log(i));
///////////////////////////////////////////////////////////////////////////////
//List of employees
const employees = [
    { id: 1, name: 'A1', salary: 100 },
    { id: 2, name: 'A2', salary: 500 },
    { id: 3, name: 'A3', salary: 1000 },
    { id: 4, name: 'A4', salary: 800 },
    { id: 5, name: 'A5', salary: 1300 }
];
employees.forEach(emp => console.log(emp));
employees.forEach(emp => console.log(emp.id, emp.name));
employees.forEach(({ id, name }) => console.log(id, name));

//Use case I want to print all employee name with lower case
//Transformation api : transform and return new array:pure funciton/immutablity
const transformedemps = employees.map(emp => emp.name.toLowerCase());
console.log(transformedemps)

//i need list of employees whose salary is less than 800
//filter : works on boolean

const filteredemps = employees.filter(emp => emp.salary <= 800);
console.log(filteredemps);

//Kindly findout how to add new element,delete,update element in the array
