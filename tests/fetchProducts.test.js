require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('testa se é uma função', () => {
    expect(typeof fetchProducts).toMatch('function');
  });
  it('testa se a função foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('testa se a url solicitada foi utilizada pelo fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  it('testa se retorno da função é um objeto computadorSearch', async () => {
    expect(fetchProducts('computador')).resolves.toMatchObject(computadorSearch);
  });
  it('testa se chamar a função sem argumentos retorna erro', async () => {
    await expect(fetchProducts()).rejects.toEqual(new Error("You must provide an url"));
  });
});
