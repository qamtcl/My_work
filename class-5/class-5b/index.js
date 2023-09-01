"use strict";
// import sumOfTwo from "./sum.js";
// import productOfTwo from "./multiply.js";
// import differenceOfTwo from "./subtract.js";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let answers = await inquirer.prompt([
// {
//     name: "userName",
//     type: "string",
//     message: "Enter your name: "
// },
// {
//     name: "email",
//     type: "string",
//     message: "Enter your email"
// },
// {
//     name:"contact",
//     type:"number",
//     message: "Enter your contact"
// }
// ])
// console.log(chalk.bgBlue(answers.userName))
// console.log(answers.contact)
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.red("Hello world"));
console.log("Hello world");
console.log(chalk_1.default.bgBlueBright("Hello world"));
console.log('Hello', chalk_1.default.underline.bgBlue('world') + '!');
