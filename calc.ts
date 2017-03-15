//Imports the function from the Math.TS file
import { powerOf2, sum } from './math';


//Import all of the functions within a certain file
//OurMath is a variable where functions are captured
// '*' is a 'wildcard' that will look for all of the functions in Math.TS
    //import * as OurMath from './math';


//Uses the function from MathTS to assign result to the variable Result1
const result1           = powerOf2(42);
const result2           = sum(8, 42);
console.log(`Squared: ${result1}`);
console.log(`Sum: ${result2}`);
