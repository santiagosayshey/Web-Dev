"use strict";
/* 
function juicer(a, o) {
  const juice = `Juice with ${a} apples, and ${o} oranges`;
  return juice;
}

console.log(juicer(1, 2));
console.log(juicer(5, 6));
 */

/* function ageCalc(bYear) {
  return 2022 - bYear;
}

console.log(`I was born in ${ageCalc(21)}`);

const ageCalc2 = function (bYear) {
  return 2022 - bYear;
};

console.log(`I was born in ${ageCalc2(21)}`); */

/* const calcAge = (birthYear) => 2022 - birthYear;

console.log(calcAge(21));

const yearsUnitlRetirement = (birthYear, name) => {
  const age = 2022 - birthYear;
  return `${name} will retire in ${65 - age} years`;
};

console.log(yearsUnitlRetirement(2001, "Sam"));
 */
/* 
function cut(fruit) {
  switch (fruit) {
    case "apple":
      return 3;
    case "banana":
      return 1;
    case "orange":
      return 6;
    default:
      return 4;
  }
}

function juicer(fruit1, fruit2) {
  const a = cut(fruit1);
  const b = cut(fruit2);

  if (fruit1 === fruit2) {
    console.log(`You made a smoothie with ${a + b} pieces of ${fruit1}`);
  } else {
    console.log(
      `You made a smoothie with ${a} pieces of ${fruit1} and ${b} pieces of ${fruit2}`
    );
  }
}

juicer("apple", "kiwi");
 */

/* function calcAge(birthYear) {
  return 2022 - birthYear;
}

function retirement(age) {
  return 65 - age;
}

function yearsUnitlRetirement(birthYear, firstName) {
  return retirement(calcAge(birthYear)) > 0
    ? `${firstName} retires in ${retirement(calcAge(birthYear))} years`
    : `You're old`;
}

console.log(yearsUnitlRetirement(2001, "sam"));
 */

/* const a = 1;
const friends = [a, "b", NaN, undefined, null];
const years = new Array(1, 2, 3);

console.log(years[1]);

for (let x = 0; x < 5; x++) {
  console.log(friends[x]);
}

for (let y = 0; y < 3; y++) {
  console.log(years[y]);
}

console.log(friends.length);

years[2] = 5;
 */
/* function calcAge(age) {
  return 2022 - age;
}

const years = [1997, 1998, 1999, 2000, 2001, 2006, 2015, 2022];

for (let x = 0; x < years.length; x++) {
  console.log(calcAge(years[x]));
}
 */

/* const arr = new Array(1, 2, 3);

console.log(arr.includes(3));

arr.unshift(4);
console.log(arr);

console.log(arr);

arr.shift();

console.log(arr); */

/* const sam = {
  firstName: "sam",
  lastName: "chau",
  age: 2022 - 2001,
  job: "student",
};

console.log(sam.firstName);

sam.firstName = "bob";

console.log(sam.firstName);

console.log(sam["firstName"]);

sam.newVariable = "new variable";

sam["newVariable2"] = "new variable 2";

console.log(sam);
 */

/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
  },

  canDrive: function () {
    return this.hasDriversLicense === true ? "a" : "no";
  },
};

jonas.calcAge();

console.log(
  `${jonas.firstName} is a ${jonas.age}-year old ${
    jonas.job
  } and he has ${jonas.canDrive()} drivers license`
);
 */
