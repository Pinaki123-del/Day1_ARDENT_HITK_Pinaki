const totalPrice = (cart) =>
    cart.reduce((sum, item) => sum + item.price, 0);

const discountPrice = (total) =>
    total - (total * 10 / 100);

module.exports = {
    totalPrice,
    discountPrice
};
