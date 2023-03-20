"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//T is a Type generic
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val;
}
identityFour({ brand: "Coke", type: 1 });
function getSearchProducts(products) {
    return products[3];
}
const getMoreSearchProducts = (products) => {
    return products[3];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
