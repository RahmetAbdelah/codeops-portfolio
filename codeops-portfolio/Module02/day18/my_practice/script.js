const menu=["dorowot","shiro","tibs"]
// console.log(menu[0]);
// menu[0];
// menu.length;
// menu[menu.length-1];

// console.log(menu.push("firfir"));
// console.log(menu.includes("tibs"));
// console.log(menu.indexOf("shiro"));
// console.log(menu);
// console.log(menu.shift());
// console.log(menu);
// console.log(menu.unshift("beg"));

// console.log(menu);

// const prices=[120,230,340]

// const withvat=prices.map(p=>p*1.15)
// console.log(withvat);

// const labels = menu.map(d => ` ${d}`);
// console.log(labels);


// const dishes=[{name:"tibs",price:200,veg:false},{ name: "Shiro", price: 120, veg: true },
// { name: "Misir", price: 110, veg: true}];

// dishes.filter(d=>d.veg);

// dishes.filter(d=>d.price<150);

// dishes.find(d=>d.name==="shiro");

// const prices = [120, 200, 160];
// // fold a list into ONE value
// const total = prices.reduce(
// (sum, p) => sum + p, 0);

// console.log(total);


// dishes.filter(d=>d.veg).map(d=>d.price).reduce((sum,p)=>s+p,o)


// const account={
//     name:"almaz bekele",
//     phone:2519876554,
//     city:"dire",
//     balance:5000,
//     memeber:"true",
//     deposit(amount){
//         this.balance+=amount;
//         return this.balance;
//     },
//     };
// console.log(account.deposit(1500));


// customer.name;
// customer['phone']
// customer.phone;
//   console.log(customer.name);
//   console.log(customer['phone']);
//   console.log(customer.phone

//   );

// const order={
//     id:1042,
//     customer:"tigist mengistu",
//     items:[
//         {name:"tibs",qty:2,price:200},
//         {name:"shiro",qty:1,price:120},
//     ],
// };

// console.log(order.items[0].name);
// console.log(order.items.length);
// console.log(order.items.reduce((s,i) => s+i.qty *i.price,0));


// const user={name:"rahmet", city:"addis"};

// const {name,city}=user;
// name;


const dish=
{  food:"tibs",
    dessert:"cheese cake"

};

const copy={...dish,dessert:"choclatecake"}


const {food,dessert}=dish;
console.log(food,dessert);

console.log(copy);