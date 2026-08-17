// 1. VAT with a default parameter
function vat(amount, rate = 0.15) {
  return amount * (1 + rate);
}

// Same logic as an arrow function with an implicit return
const vatArrow = (amount, rate = 0.15) => amount * (1 + rate);

console.log("VAT:", vat(1000));       // 1150
console.log("VAT Arrow:", vatArrow(1000)); // 1150


// 2. Closure: makeCounter
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

// count stays private because it is declared inside makeCounter.
// Code outside makeCounter cannot directly access count.
// The returned function remembers count through a closure.


// 3. discountBy factory
const discountBy = (rate) => {
  return (price) => price * (1 - rate);
};

const memberPrice = discountBy(0.10); // 10% discount
const salePrice = discountBy(0.30);   // 30% discount

console.log("Member price:", memberPrice(1000), "ETB"); // 900 ETB
console.log("Sale price:", salePrice(1000), "ETB");     // 700 ETB


// 4. Higher-order function: applyToAll
const applyToAll = (list, fn) => {
  return list.map(fn);
};

const prices = [100, 200, 500, 1000];

const pricesWithVAT = applyToAll(prices, vat);

console.log("Prices with VAT:", pricesWithVAT);
// [115, 230, 575, 1150]


// 5. forEach callback
const cities = [
  "Addis Ababa",
  "Dire Dawa",
  "Bahir Dar",
  "Gondar",
  "Hawassa"
];

cities.forEach((city, index) => {
  console.log(`${index + 1}. ${city}`);
});