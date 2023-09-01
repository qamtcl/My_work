/*import sumOfTwo from "./sum.js";
import productOfTwo from "./product.js";
import differecneOfTwo from "./subtract.js";

console.log(sumOfTwo(15, 20));
console.log(productOfTwo(5, 10));
console.log(differenceOfTwo())
*/

// let arr = ["abc", "xyz"]
// name: "user name";

import inquirer from "inquirer";
const answer = await inquirer.prompt([{
name:"user name",    
type:"text",
message:" Enter your name...."

}])
console.log(answer.userName);

