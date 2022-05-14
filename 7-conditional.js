console.log("Working with conditionals");

const listOfDestinations = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 15;
const isAccompanied = true;
const hasPurchasedTicket = true;

console.log("Possible destinations:");
console.log(listOfDestinations);

// if (ageOfBuyer >= 18) {
//   console.log("Buyer of legal age!");
//   listOfDestinations.splice(1, 1); //remove item
// } else {
//   //The person is a minor
//   if (isAccompanied) {
//     console.log("Buyer is accompanied!");
//     listOfDestinations.splice(1, 1); //remove item
//   } else {
//     console.log("Buyer is not of legal age! I can't sell.");
//   }
// }

console.log(listOfDestinations);

// console.log(ageOfBuyer > 18);
// console.log(ageOfBuyer < 18);
// console.log(ageOfBuyer <= 18);
// console.log(ageOfBuyer >= 18);
// console.log(ageOfBuyer == 18);

if (ageOfBuyer >= 18 || isAccompanied) {
  console.log("Buyer of legal age or is accompanied. Good trip!");
  listOfDestinations.splice(1, 1); //remove item
} else {
    console.log("Buyer is not of legal age! I can't sell.");
  }

console.log("Board: \n\n")
if(ageOfBuyer >= 18 || isAccompanied && hasPurchasedTicket) {
  console.log("You can board. Good trip!");
} else {
  console.log("You cann't board!")
}