console.log("Conversion of types");

console.log("year " + 2020);
console.log("2" + "2"); //concatenation of texts
console.log(parseInt("2") + parseInt("2")); //explicit conversion

//being weakly typed makes it possible to change types of values because it will try to convert (implicitly)
console.log("7" / "2"); //automatic conversion because division only makes sense with numbers
console.log("Ricardo" / "2"); //Nan = Not a number

console.log(6.5);
console.log(6,5);