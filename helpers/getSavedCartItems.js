const getSavedCartItems = (parameter) => {
  // seu código aqui
  const getItem = (localStorage.getItem(parameter));
  return getItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
