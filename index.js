"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var shipping;
var taxPercent;
var total;
var shippingAddress;
var productName = products_1["default"][0].name;
var product = products_1["default"].filter(function (product) {
    return product.name === productName;
})[0];
console.log(product);
if (product.preOrder === true) {
    console.log("Notification will be sent");
}
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("Shipping is Free!!");
}
else {
    shipping = 5;
}
