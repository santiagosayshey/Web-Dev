/* Coding Challenge 1 */

const markHeight = 1.88;
const markMass = 95;

const johnHeight = 1.76;
const johnMass = 85;

const mBMI = markMass / markHeight ** 2;

const jBMI = johnMass / johnHeight ** 2;

const markHigherBMI = mBMI > jBMI;

console.log(mBMI, jBMI);
console.log(markHigherBMI);
