console.log("Working with conditionals");

const listOfDestinations = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);
const ageOfBuyer = 15;
console.log("Possible destinations:");
console.log(listOfDestinations);

if (ageOfBuyer >= 18) {
  console.log("Buyer of legal age!");
  listOfDestinations.splice(1, 1);
} else {
  console.log("Buyer is not of legal age! I can't sell.");
}

console.log(listOfDestinations);

console.log(ageOfBuyer > 18);
console.log(ageOfBuyer < 18);
console.log(ageOfBuyer <= 18);
console.log(ageOfBuyer >= 18);
console.log(ageOfBuyer == 18);
