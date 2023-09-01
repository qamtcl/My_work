"use strict";
/*import sumOfTwo from "./sum.js";
import productOfTwo from "./product.js";
import differecneOfTwo from "./subtract.js";

console.log(sumOfTwo(15, 20));
console.log(productOfTwo(5, 10));
console.log(differenceOfTwo())
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let arr = ["abc", "xyz"]
// name: "user name";
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([{
        name: "user name",
        type: "text",
        message: " Enter your name...."
    }]);
console.log(answer.userName);
