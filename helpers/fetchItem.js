const fetchItem = async (parameter = 'MLB1341706310') => {
  // seu código aqui
  try {
  const getApi = `https://api.mercadolibre.com/items/${parameter}`;
  const apiResponse = await fetch(getApi);
  const result = await apiResponse.json();
  return result;
  } catch (error) {
    throw new Error('You must provide and url');
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
