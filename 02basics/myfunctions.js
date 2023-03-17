"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(name) {
    return name.toUpperCase();
}
getUpper("onur");
function signUpUser(name, email, isPaid) {
}
signUpUser("onur", "onur@itenium.be", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("o", "o@o.b");
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
