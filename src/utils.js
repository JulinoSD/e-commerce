//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
// temporary single product
// 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://www.course-api.com/javascript-store-single-product?id=recyqtRglGNGtO4Q5';
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((price / 100).toFixed(2))
  return formattedPrice
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if(setStorageItem){
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
  storageItem = []
}
return storageItem
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
