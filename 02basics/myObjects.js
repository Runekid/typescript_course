"use strict";
exports.__esModule = true;
var user = {
    name: "onur",
    email: "onur@dev.be",
    isActive: true
};
//function createUser({ name: string, isPaid: boolean }) { }
var newUser = { name: "onur", isPaid: false, email: "onur@dev.be" };
//createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser({ name: "Onur", email: "onur@dev.be", isActive: true });
