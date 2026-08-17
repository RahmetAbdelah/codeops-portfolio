let bill= prompt("enter bill:")
let num= prompt("enternumber of people:")
bill=Number(bill)
num=Number(num)

const rate=bill>300?bill*0.1:bill*0.05;
const  tip=rate*bill;

const total=tip+bill;


let paymentMethod= prompt("enter payment method:")

switch (paymentMethod) {
  case "TeleBirr":
    serviceFeeRate = 0.02;
    break;

  case "CBE Birr":
    serviceFeeRate = 0.015;
    break;

  default:
    serviceFeeRate = 0;
}

const serviceFee = serviceFeeRate * total;
const totalWithServiceFee = total + serviceFee;
const perPersonPayment = totalWithServiceFee / num;

console.log(
  `Bill: ${bill.toFixed(2)} ETB | Tip: ${tip.toFixed(2)} ETB | Service Fee: ${serviceFee.toFixed(2)} ETB | Total: ${total.toFixed(2)} ETB | Per Person: ${perPerson.toFixed(2)} ETB`
);






