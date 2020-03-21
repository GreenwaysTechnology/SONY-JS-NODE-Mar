//has-a relationship

let emp = {
    "id": 1,
    "name": 'Subramanian',
    "salary": 1900,
    "isActive": true,
    //has-a
    "address": {
        "city": 'Chennai',
        "state": 'TN'
    },
    calculateSalary() {
        return 1000
    }

};
console.log('Employee information')
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.salary} ${emp.address.city}`)