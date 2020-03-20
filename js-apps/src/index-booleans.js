//booleans

let isActive = true;
let isEnabled = false;
console.log(`IsActive ${isActive}`);
console.log(`Is Enabled ${isEnabled}`);

if (isActive) {
    console.log('Active')
} else {
    console.log('In active');
}
//tenary operator
isEnabled ? console.log('Enabled') : console.log('Disabled')

//Eq: if you are comparing two variables

let a = 10;
let b = 10;
if (a == b) {
    console.log('A and B are equal')
} else {
    console.log('A and B are not equal')

}

//comparing strings and numbers not valid

let x = "10";
let y = 10;
if (x == y) {
    console.log('X and Y are equal')
} else {
    console.log('X and Y are not equal')
}
if (x === y) {
    console.log('X and Y are equal')
} else {
    console.log('X and Y are not equal')
}
//||
if (isActive || isEnabled) {
    console.log('Ok')
} else {
    console.log('Not Ok!')
}
//////////////////////////////////////////////////////////////////////////////////
//Advanced booleans

let start = 1;
if (start) {
    console.log('Started')
} else {
    console.log('Not Started')
}

let message;
let res = message ? "Hai" : "Welcome"
console.log(res);
/////////////////////////////////////////////////////////////////////////////////
// || 

/**
 * if first operand(price) is truthy , the result would be first operand else 
 * result would be second
 */
let price = 199;
let priceValue = price || 10;
console.log(`Price Value ${priceValue}`);

// && : please follow the above rule but opposit



