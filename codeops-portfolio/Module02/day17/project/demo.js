// demo.js

const createLoyalty = require("./loyalty");

// Normal loyalty card
const card = createLoyalty();

console.log("=== Normal Loyalty ===");

card.earn(250);
console.log("After spending 250 ETB:", card.balance(), "points");

card.earn(100);
console.log("After spending another 100 ETB:", card.balance(), "points");

card.redeem(10);
console.log("After redeeming 10 points:", card.balance(), "points");

card.redeem(1000);
console.log("After trying to redeem 1000 points:", card.balance(), "points");


// Holiday loyalty card
console.log("\n=== Holiday Loyalty ===");

const holidayRule = (etb) => {
  return Math.floor(etb / 10) * 2;
};

const holidayCard = createLoyalty(holidayRule);

holidayCard.earn(250);

console.log(
  "Holiday points for spending 250 ETB:",
  holidayCard.balance(),
  "points"
);