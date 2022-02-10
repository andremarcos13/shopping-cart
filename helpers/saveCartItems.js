const saveCartItems = (Item) => {
  // seu código aqui
  localStorage.setItem('cartItems', Item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
