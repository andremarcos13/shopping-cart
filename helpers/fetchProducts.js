const fetchProducts = async (parameter) => {
  // seu código aqui
  try {
  const getApi = `https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`;
  const apiResponse = await fetch(getApi);
  const result = await apiResponse.json();
  return result;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
