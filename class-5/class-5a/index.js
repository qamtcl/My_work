"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{
        name: "userName",
        type: "text",
        message: "Enter your name... "
    }]);
console.log(answer.userName);
