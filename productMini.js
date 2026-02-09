
const basics = require("./basics");

let cart = [];

// add to cart
const addCart = (name) => {
    const product = basics.searchProduct(name);
    if (product) {
        cart = [...cart, product];
    }
};

// remove from cart 
const removeCart = (name) => {
    cart = cart.filter(item => item.name !== name);
};

const getCart = () => cart;

module.exports = {
    addCart,
    removeCart,
    getCart
};
