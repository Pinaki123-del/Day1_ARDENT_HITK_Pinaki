const basics = require("./basics");
const productMini = require("./productMini");
const es6 = require("./es6");

// add new product
basics.addProduct("Pencil", 15);

// show products
console.log("Products:", basics.getProducts());

// add to cart
productMini.addCart("Pen");
productMini.addCart("Bag");
productMini.addCart("Pencil");

// remove one item
productMini.removeCart("Pen");

// price calculation
const cart = productMini.getCart();
const total = es6.totalPrice(cart);
const finalPrice = es6.discountPrice(total);

console.log("Cart:", cart);
console.log("Total Price:", total);
console.log("After Discount:", finalPrice);
