/**
 * strings
 */

//es 5 syntax only for few examples 

var firstName = "Subramanian";
var lastName = 'Murugan'
//print
console.log("Full Name " + firstName + lastName);
console.log("Full Name", firstName, lastName);
//es6 string 
console.log(`Full Name ${firstName} ${lastName}`)
let city = 'Coimbatore';
//back tick notation use case : for string concatation : template literal
console.log(`City ${city}`)
//back tick notation use case : for multi line string literal
//es 5 multi line strings
let title = 'Sony'
let htmlDoc = "<html>" +
    "<head><title>" +
    title +
    "</title>" +
    "</head>" +
    "<body><h1>Sony Digital</h1>" +
    "</body></html>";

console.log(htmlDoc);
//es 6 multi line strings
let htmlnewDoc = `<html>
    <head>
    <title>${title}</title>
    </head>
    <body><h1>Sony Digital</h1>
    </body></html>`;
console.log(htmlnewDoc);






