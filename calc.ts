//Imports the function from the Math.TS file
import { powerOf2, sum } from './math';

//Uses the function from MathTS to assign result to the variable Result1
const result1           = powerOf2(42);
const result2           = sum(8, 42);
console.log(`Squared: ${result1}`);
console.log(`Sum: ${result2}`);
