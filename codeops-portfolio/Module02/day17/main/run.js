
const {
  subtotal,
  discountBy,
  withVat,
  makeReceiptMaker
} = require("./order");


const makeReceipt = makeReceiptMaker();

// Order 1
const order1Subtotal = subtotal(120, 200);
const order1Discounted = memberDiscount(order1Subtotal);
const order1Total = withVat(order1Discounted);

console.log(makeReceipt(order1Total));

// Order 2
const order2Subtotal = subtotal(150, 100, 80);
const order2Discounted = memberDiscount(order2Subtotal);
const order2Total = withVat(order2Discounted);

console.log(makeReceipt(order2Total));

// Order 3
const order3Subtotal = subtotal(250, 120);
const order3Discounted = memberDiscount(order3Subtotal);
const order3Total = withVat(order3Discounted);

console.log(makeReceipt(order3Total));