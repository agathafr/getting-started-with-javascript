console.log(" \n Working with conditionals");

const listOfDestinations = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 18;
const isAccompanied = false;
let hasPurchasedTicket = false;
const destination = "Salvador"

console.log(" \n Possible destinations:");
console.log(listOfDestinations);

if (ageOfBuyer >= 18 || isAccompanied) {
  console.log("Buyer of legal age or is accompanied. Good trip!");
  listOfDestinations.splice(1, 1); //remove item
  hasPurchasedTicket = true;
} else {
    console.log("Buyer is not of legal age! I can't sell.");
    hasPurchasedTicket = false;
  }

console.log("Board: \n\n")
if(ageOfBuyer >= 18 || isAccompanied && hasPurchasedTicket) {
  console.log("You can board. Good trip!");
} else {
  console.log("You cann't board!");
}