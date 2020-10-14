import { getProducts } from "../mocks/products.js";
import { setListener } from "../utils/dom.js";

class Main {
  constructor(){
    this.products = [];
    this.filters = {
      category: 'all',
      search: '',
    };
    this.renderElement = this.getRenderElement();

    this.init();
  }

  init() {
    this.setCategoryFieldListener();
    this.setSearchFieldListener();

    this.products = getProducts();

    this.renderProducts(this.products);
  }

  getRenderElement(){
    return document.querySelector('#product-list');
  }

  setCategoryFieldListener() {
    setListener('#category-field', 'change', this.handleCategoryFilter.bind(this));
  }

  handleCategoryFilter(event){
    this.filters.category = event.target.value;

    this.applyFilters();
  }

  filterByCategory(products){
    if (this.filters.category === 'all') {

      return products;
    }

    return products.filter((product) => {
        return product.category === this.filters.category;
    });
  }

  setSearchFieldListener(){
    setListener('#search-field', 'input', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(event){
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 2) {
      this.filters.search = search;

      this.applyFilters();
    }
  }

  filterBySearch(products){
    return products.filter(products => {
      return products.name.toLowerCase().includes(this.filters.search.toLowerCase());
    })
  }

  applyFilters(){
    const filteredProducts = this.filterByCategory(this.products);
    const searchedProduts = this.filterBySearch(filteredProducts);

    this.renderProducts(searchedProduts);
  }

  renderProducts(products) {
    this.renderElement.innerHTML = products.reduce((accumulator, products) => {
      return (accumulator += `
        <li class="card">
          <img
            class="card__image"
            src="${products.imageSrc}"
            alt="Imagem ${products.name}"
          />

          <div class="card__info">
            <p class="card__info__text">${products.name}
              <span class="display--block font-size--1">${products.price}</span>
            </p>

            <button class="button">Adicionar ao Carrinho</button>
          </div>
        </li>
      `);
    }, '');
  }
}

new Main();
