
//Object Augmentation: Adding,deleting,updating,iterating object.

function Employee() {
    //no property
}
//Proto type augmentation
Employee.prototype.salary = 9000;

let emp = new Employee();

console.dir(emp);

//Add new property
emp.id = 1000;
emp.name = 'Ram' //add operation
console.log(`Id ${emp.id} Name ${emp.name}`)
//if prop found, then update else add.
emp.name = 'suburamanian' //update operation
emp.city = 'coimbatore'

//when you look up property, first js search the property in the current
//object---if not-->it looks up its immedate parent(Prototype)--if not--it 
//looks up its immedate parent---Object
console.log(`Id ${emp.id} Name ${emp.name} ${emp.city} ${emp.salary}`) //getters

//delete a property
delete emp.city;
console.log(`Id ${emp.id} Name ${emp.name} ${emp.city} ${emp.salary}`) //getters


//iterations

//object for.in.loop

for (key in emp) {
    console.log(key, emp[key]); // [] dymamic prop value access:
}

