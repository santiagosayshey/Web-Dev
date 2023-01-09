/* Coding Challenge 1 */

/* function BMI(height, mass) {
    return mass / height ** 2;
  }

  const markHeight = 1.88;
  const markMass = 95;

  const johnHeight = 1.76;
  const johnMass = 85;

  const mBMI = BMI(markHeight, markMass);

  const jBMI = BMI(johnHeight, johnMass);

  const markHigherBMI = mBMI > jBMI;

  console.log(mBMI, jBMI);
  console.log(markHigherBMI); */

/* Coding Challenge 2 */

/* function BMI(height, mass) {
  return mass / height ** 2;
}

const markHeight = 1.88;
const markMass = 95;

const johnHeight = 1.76;
const johnMass = 85;

const mBMI = BMI(markHeight, markMass);

const jBMI = BMI(johnHeight, johnMass);

const markHigherBMI = mBMI > jBMI;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${mBMI.toFixed(2)}) is higher than John's (${jBMI.toFixed(
      2
    )})! `
  );
} else {
  console.log(
    `John's (${jBMI.toFixed(2)}) BMI is higher than Mark's (${mBMI.toFixed(
      2
    )})!`
  );
}
 */

/* Coding Challenge 3 */

/* const d1av = (96 + 108 + 89) / 3;
const d2av = (97 + 112 + 101) / 3;
const d3av = (97 + 112 + 101) / 3;

const k1av = (88 + 91 + 110) / 3;
const k2av = (109 + 95 + 123) / 3;
const k3av = (109 + 95 + 106) / 3;

function winner(av1, av2, g) {
  console.log(`Dolphins score ${av1.toFixed(2)}
  Koalas Score ${av2.toFixed(2)}`);

  if ((av1 > 99 && av2 > 99) || !g) {
    if (av1 === av2) {
      console.log("It's a tie");
    } else if (av1 > av2) {
      console.log(`Dolphins Win!`);
    } else if (av2 > av1) {
      console.log(`Koalas Win!`);
    }
  } else {
    console.log(`No One Wins!`);
  }
}

winner(d1av, k1av, true); */

/* Coding Challenge 4 */

function tip(price) {
  return price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;
}

function total(price) {
  console.log(
    `The bill was ${price}, the tip was ${tip(price)}, and the total value ${
      tip(price) + price
    }`
  );
}

const p1 = 275;
const p2 = 40;
const p3 = 430;

total(p1);
