const saveCartItems = (parameter) => {
  // seu código aqui
  localStorage.setItem('cartItems', parameter);
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
