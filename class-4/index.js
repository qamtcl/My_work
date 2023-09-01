"use strict";
//Loops
Object.defineProperty(exports, "__esModule", { value: true });
//For Loop
// for(initial, codition, itertation)
for (var number = 1; number <= 10; number++) {
    console.log("Hello");
}
var groceryItems = ["Bread", "egg", "milk", "coffee", "fruit", "Tea", "fruit", "veg", "fruit", "oil"];
var furitCounter = 0; // 0
for (var i = 0; i < groceryItems.length; i++) {
    if (groceryItems[i] == "fruit" && furitCounter >= 2) {
        continue;
    }
    else {
        console.log("item no. ".concat(i, " which is ").concat(groceryItems[i]));
        console.log("Pick from rack");
        console.log("putt in cart");
        console.log("================================");
    }
    if (groceryItems[i] === "fruit") {
        furitCounter++; //1
        // if(furitCounter >= 2 ){  //1 >= 2
        //     break;
        // }
    }
}
// ==============================================================
//Buy every item once
var buyItems = []; //"bread","egg","milk","friut"
for (var i = 0; i < groceryItems.length; i++) {
    var val = buyItems.includes(groceryItems[i]); //true / false
    // val == true
    if (!val) {
        console.log("item no. ".concat(i, " which is ").concat(groceryItems[i]));
        console.log("Pick from rack");
        console.log("putt in cart");
        console.log("================================");
        buyItems.push(groceryItems[i]);
    }
}
console.log(buyItems);
// ================================================
// Nested Loop
// outer loop{
//     // innerloop
// }
for (var outer = 1; outer <= 5; outer++) {
    for (var inner = 1; inner <= 3; inner++) {
        console.log("outer loop value is ".concat(outer, ".... inner loop value is: ").concat(inner));
    }
}
var firstName = ["Mike", " Jhon", "smith", "Dan"]; //row
var lastName = ["David", "Jack", "Khan"]; //col
var fullName = [];
for (var fName = 0; fName < firstName.length; fName++) { //outer loop
    for (var lName = 0; lName < lastName.length; lName++) {
        console.log("Full name will be  ".concat(firstName[fName], " ").concat(lastName[lName]));
        fullName.push("".concat(firstName[fName], " ").concat(lastName[lName]));
    }
}
console.log(fullName);
//=====================================================
// While Loops
// while(condition){
// }
var playerLife = 3;
while (playerLife != 0) {
    console.log("player life is ", playerLife);
    console.log("Game is runnig...");
    console.log("Game is runnig...");
    console.log("Game is runnig...");
    console.log("hit enemy");
    playerLife--;
    if (playerLife == 0) {
        console.log("******* gamer over **********");
    }
}
var firstModule_1 = require("./firstModule");
var g = 10;
// console.log("varible f is : ", aslskdal);
console.log("g value is :", firstModule_1.g);
