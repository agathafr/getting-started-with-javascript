console.log("Working with assigment of variables");
const age = 29;
let firstName = "Ricardo"; //let declares a common variable (actually variable) that can be overwritten
const surname = "Bugan";

//console.log(nome + " " + surname)
console.log(firstName, surname);
console.log(`My name is ${firstName} ${surname}`); //variable interpolation

firstName = firstName + surname; //variable overwriting incorrect because it was declared as constant
firstName = 2; //weakly typed = easily switches between text and number types
console.log(firstName); 

//js is interpreted, has no compile-time errors
//change of state in programming makes it difficult to find errors so it is a good practice to keep constants instead of variables

const fullName = firstName + surname;
console.log(fullName);
fullName = 2;