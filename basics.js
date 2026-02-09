let products = [
    { name: "Pen", price: 100 },
    { name: "Book", price: 500 },
    { name: "Bag", price: 300 }
];

// add product 
const addProduct = (name, price) => {
    products = [...products, { name, price }];
};

// search product
// const searchProduct = (name) =>
//     products.filter(p => p.name === name);
const searchProduct = (name) =>
    products.find(p => p.name === name);

// get all products
const getProducts = () => products;

module.exports = {
    addProduct,
    searchProduct,
    getProducts
};
