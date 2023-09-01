var promptSync = require("prompt-sync")();
var userName = promptSync("Enter your name.. ");
console.log("your name is :", userName);
//=====================
//Functions
//keyword  name  (parameters)
function greeting() {
    //body
    console.log("this is greeting function");
}
//greeting();
//Type
//1- input, no return
//2- no input, but return values
//3- input, but return values as well
//1-input, no return
function greeting2(useName) {
    console.log("Hi, ".concat(useName, " this is greeting2 function"));
}
greeting2("Usman");
//================================
//2- no input but return value
function add(n1, n2) {
    var a = 5;
    var b = 10;
    return a + b;
}
var result = add(5, 6);
console.log("Here is the return value", result);
function add2() {
    var a = 15;
    var b = 10;
    console.log("Here is add2 values", a + b);
}
add2();
//========================================
//3-  input, but return values as well
function addWithInputandOutput(num1, num2) {
    var value = "Here is add With Input and Output values ".concat(num1, " +").concat(num2);
    return value;
}
var returnVal = addWithInputandOutput(30, 40);
console.log(returnVal);
function adds() {
    var a = 5;
    var b = 10;
    return a + b;
}
var results = adds(); //15
console.log("Here is the return value", results);
//=================================
// Arrow fucntions
//single  //no inpt and no reutrn
var add3 = function () { return console.log("Here is add3 values", 5 + 15); };
var add4 = function () { return 5 + 30; };
add3();
console.log(add4());
// ================================
//arrow functions with parameters
var add5 = function (num1, num2) { return num1 + num2; };
add5(15, 20);
console.log(add5);
// ==========================================
//if else
function gateEntry2(haveCard) {
    if (haveCard == true) {
        return "Allowed";
    }
    else {
        return "Not Allowed";
    }
}
var entry2 = gateEntry2(false);
console.log(entry2);
//====================
//else if
function gateEntry(haveCard) {
    if (haveCard == "PIAIC card") {
        return "Allowed";
    }
    else if (haveCard == "CNIC") {
        return "You can enter";
    }
    else {
        return "Not Allowed";
    }
}
var entry = gateEntry("passport");
console.log(entry);
//======================================
//Arrays
var students = ["Ali", "Ahmed", "ibtisam", "Usman"];
//how to remove values in above given array
console.log("Initial array", students);
var popReturns = students.pop();
console.log("Pop is returing :", popReturns);
console.log("after", students);
//how to add values in above given array
var returnval = students.push("Zia");
console.log("pushing returnig", returnval);
console.log("after pushing new value", students);
//==================================
// shift
students.shift();
console.log("after shift", students);
//unshift
students.unshift("Jhon");
console.log("after unshift", students);
//==================================
//splice
students.splice(2, 1, "Umer", "abc", "xyz");
console.log("After splice", students);
//adding new value
students.splice(2, 0, "Ali");
console.log("After splice", students);
//replacing existing values
students.splice(2, 1, "Ali");
console.log("After splice", students);
//replacing existing values
students.splice(2, 1, "Ali", "Ahmed", "Hamza");
console.log("After splice", students);
//==================================
//slice
var sliceArray = students.slice(3);
console.log("slice array", sliceArray);
