//JSON Parser

//Object
const employees = [
    { id: 1, name: 'A1', salary: 100 },
    { id: 2, name: 'A2', salary: 500 },
    { id: 3, name: 'A3', salary: 1000 },
    { id: 4, name: 'A4', salary: 800 },
    { id: 5, name: 'A5', salary: 1300 }
];
//Object to String
const str = JSON.stringify(employees);
console.log(str);

//String to Object
const obj = JSON.parse(str);
console.log(obj)