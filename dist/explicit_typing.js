"use strict";
function multiply(a, b) {
    return a * b;
}
const multiplicand = 8;
const multiplier = 12;
const multipliedNum = multiply(multiplicand, multiplier);
console.log("Explicit Typing challanges");
console.log("Multiply:", multiplicand, multiplier, multipliedNum);
function calculateTotal(price, quantity, discount, taxRate) {
    let total = price * quantity;
    if (discount) {
        total *= (1 - discount);
    }
    const tax = total * taxRate;
    total += tax;
    return total;
}
