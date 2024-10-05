// global imports
import './toggleSidebar.js';
import './cart/toggleCart.js';
import './cart/setupCart.js';

//  filter imports
import setupSearch from './filters/search.js'
import setupCompanies from './filters/companies.js'
import setupPrice from './filters/price.js'

// specific imports
import { store } from './store.js';
import addToCartDOM from './cart/addToCartDOM.js';
import { formatPrice, getElement } from './utils.js';

const display = (products, element) => {
    //display products
    element.innerHTML = products.map((product)=>{
        const {id, image, name, price} = product
        return`
        <article class="product">
           <div class="product-container">
            <img src="${image}" alt="${name}" class="product-img img" />
            <!-- product icons -->
            <div class="product-icons">
              <a href="./product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">$ ${price/100}</h4>
          </footer>
        </article>
        `
    }).join('')
}

export default display