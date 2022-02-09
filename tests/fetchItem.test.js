require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('testa se é uma função', () => {
    expect(typeof fetchItem).toMatch('function');
  });
  it('testa se a função foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('testa se a url solicitada foi utilizada pelo fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  it('testa se retorno da função é um objeto', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toMatchObject(item);
  });
  it('testa se chamar a função sem argumentos retorna erro', async () => {
    await expect(fetchItem()).rejects.toEqual(new Error("You must provide an url"));
  });
});
