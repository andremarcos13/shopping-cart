const fetchProducts = async (parameter) => {
  // seu código aqui
  const getApi = `https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`;
  const apiResponse = await fetch(getApi);
  const products = await apiResponse.json();
  return products;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
