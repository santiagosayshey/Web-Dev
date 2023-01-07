/* Coding Challenge 1 */

function BMI(height, mass) {
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
console.log(markHigherBMI);
