console.log(" \n Working with conditionals");

const listOfDestinations = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 15;
const isAccompanied = false;
let hasPurchasedTicket = false;
const destination = "Curitiba";

console.log(" \n Possible destinations:");
console.log(listOfDestinations);

const canBuy = ageOfBuyer >= 18 || isAccompanied;

let count = 0;
let destinyExists = false;

while (count < 3) {
  if (listOfDestinations[count] == destination) {
    destinyExists = true;
    break;
  }
  count += 1;
}

console.log("Existing destination: ", destinyExists);

if (canBuy && destinyExists) {
  console.log("Good trip!");
} else {
  console.log("Sorry, we had a mistake!");
}

for (let i = 0; i < 3 ; i++) {
  if (listOfDestinations[i] == destination) {
    destinyExists = true;
    break;
  }
}