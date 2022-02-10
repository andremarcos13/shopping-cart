// declaracao de variaveis globais - utilizadas nas funcoes abaixo
const addToCart = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const cartItemLi = document.querySelectorAll('.cart__item');
const btnEmpty = document.querySelector('.empty-cart');
// fim declaracao variaveis

// CREATE PRODUCT IMG - cria um elemento img com classe = item_image
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}
// END OF PRODUCT IMG

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
// CREATE ONE PRODUCT CARD - cria uma section com classe item, e entao cria como filhos span e img
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}
// END OF CREATE PRODUCT CARD
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// funcao apagar itens carrinho
function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
}
// fim funcao apagar itens carrinho

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// criando funcao de criar lista
const createList = async () => {
  const selectClassItem = document.querySelector('.items');
  const resultApi = await fetchProducts('computador');
  resultApi.results.forEach((product) => {
    selectClassItem.appendChild(createProductItemElement(product));
  });
};
createList();
// fim da funcao de criar lista

// evento para adicionar ao carrinho
addToCart.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const valueSku = getSkuFromProductItem(event.target.parentNode);
    const callFetchItem = await fetchItem(valueSku);
    cartItems.appendChild(createCartItemElement(callFetchItem));
  }
});
// fim evento adicionar ao carrinho
// funcao localStorage 

// fim funcao localStorage

// funcao esvaziar carrinho
function emptyShoppingCar() {
  cartItems.innerHTML = '';
}
btnEmpty.addEventListener('click', emptyShoppingCar);
// fim funcao esvaziar carrinho

window.onload = () => {};
