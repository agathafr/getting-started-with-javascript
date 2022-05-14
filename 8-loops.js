console.log(" \n Working with conditionals");

const listOfDestinations = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 18;
const isAccompanied = false;
let hasPurchasedTicket = false;
const destination = "Salvador";

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
