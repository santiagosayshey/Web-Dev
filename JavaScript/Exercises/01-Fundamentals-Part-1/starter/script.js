/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

let firstName = "jonas";

console.log(firstName); */

/* let a = true;
console.log(typeof a);

a = "SAM";
console.log(typeof a);

let b;

console.log(b);
console.log(typeof b);
 */
/* 
const year = 2099;

const ageJonas = year - 1991;
const ageSarah = year - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * ageSarah);

const name1 = "sam";
const name2 = " chau";

console.log(name1 + name2);

const x = 5 + 50;
console.log(x);
 */

/* const firstName = "Sam";
const job = "Student";
const birthYear = 2001;
const year = 2023;

const sam =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

const samNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(samNew);

console.log(`yo
wassup
my
name
is
sam`);
 */

/* const age = 1;

if (age === 19) {
  console.log("yeah im 19");
} else if (age === 17) {
  console.log("no im not 19");
} else {
  console.log("go away");
}
 */

/* const inputYear = "1991";
console.log(inputYear);
const numInputYear = Number(inputYear);
console.log(inputYear);
const stringInputYear = String(inputYear);
console.log(inputYear); */

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(""));

console.log(Boolean(1));
console.log(Boolean("a"));

const money = 1;

if (!money) {
  console.log(`ya broke`);
} else {
  console.log(`ya rich`);
}
 */

/* const age = 1;
if (age != 18) {
  console.log("is 18");
} else {
  console.log("not 18");
}

const userpass = prompt("Username", "Password");
console.log(num);
 */

/* const hasLicense = false;
const hasVis = true;

console.log(hasLicense && hasVis);
console.log(hasLicense || hasVis);
 */

let day = NaN;

switch (day) {
  case 1:
    console.log(`monday`);
    break;
  case 2:
    console.log(`tuesday`);
    break;
  default:
    console.log(`a day`);
}

if (day == 1) {
  console.log(`monday`);
} else if (day == 2 || day == 3) {
  console.log(`a day`);
}
