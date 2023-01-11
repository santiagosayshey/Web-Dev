/* Coding Challenge 1 */

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(d, k) {
  if (d >= 2 * k) {
    console.log(`Dolphins Win (${d} vs. ${k})`);
  } else if (k >= 2 * d) {
    console.log(`Koalas Win (${k} vs. ${d})`);
  } else {
    console.log(`No one wins! (${d} vs. ${k})`);
  }
}

const d1a = 44;
const d1b = 23;
const d1c = 71;

const k1a = 65;
const k1b = 54;
const k1c = 49;

const d2a = 85;
const d2b = 54;
const d2c = 41;

const k2a = 23;
const k2b = 34;
const k2c = 27;

checkWinner(calcAverage(d2a, d2b, d2c), calcAverage(k2a, k2b, k2c)); */

/* Coding Challenge 2 */

/* function tip(price) {
  return price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;
}

const bills = new Array(125, 555, 44);
let tips = new Array();
let total = new Array();

for (let x = 0; x < bills.length; x++) {
  tips.push(tip(bills[x]));
  total.push(bills[x] + tips[x]);
}

for (let x = 0; x < bills.length; x++) {
  console.log(
    `The bill was ${bills[x]}, the tip was ${tips[x]}, and the total value ${total[x]}`
  );
}
 */

/* Coding Challenge 3 */

/* class Person {
  constructor(name, mass, height) {
    this.fullName = name;
    this.mass = mass;
    this.height = height;
    this.BMI = undefined;
  }

  calcBMI() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const mark = new Person("Mark Miller", 78, 1.69);
const john = new Person("John Smith", 92, 1.92);

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `Mark's BMI (${mark.BMI.toFixed(
      2
    )}) is higher than John's (${john.BMI.toFixed(2)})! `
  );
} else {
  console.log(
    `John's (${john.BMI.toFixed(
      2
    )}) BMI is higher than Mark's (${mark.BMI.toFixed(2)})!`
  );
}
 */

/* Coding Challenge 4 */

function tip(price) {
  return price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;
}

const bills = new Array(125, 555, 44);
let tips = new Array();
let total = new Array();

for (let x = 0; x < bills.length; x++) {
  tips.push(tip(bills[x]));
  total.push(bills[x] + tips[x]);
  console.log(
    `The bill was ${bills[x]}, the tip was ${tips[x]}, and the total value ${total[x]}`
  );
}
