import { getProducts } from "../mocks/products.js";
import { setListener } from "../utils/dom.js";
import { formatToBRL } from "../utils/currency.js"

class Main {
  constructor() {
    this.products = [];
    this.filters = {
      category: 'all',
      search: '',
      price: 'asc',
    };
    this.renderElement = this.getRenderElement();

    this.init();
  }

  init() {
    this.setPriceFieldListener();
    this.setCategoryFieldListener();
    this.setSearchFieldListener();

    this.products = getProducts();

    this.renderProducts(this.products.sort(this.sortByPrice.bind(this)));
  }

  getRenderElement() {
    return document.querySelector('#product-list');
  }

  setPriceFieldListener() {
    setListener('#sort-field', 'change', this.handlePriceFilter.bind(this));
  }

  handlePriceFilter(event) {
    this.filters.price = event.target.value;

    this.applyFilters();
  }

  setCategoryFieldListener() {
    setListener('#category-field', 'change', this.handleCategoryFilter.bind(this));
  }

  handleCategoryFilter(event) {
    this.filters.category = event.target.value;

    this.applyFilters();
  }

  filterByCategory(product) {
    if (this.filters.category === 'all') {

      return true;
    }

    return product.category === this.filters.category;
  }

  setSearchFieldListener() {
    setListener('#search-field', 'input', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(event) {
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 2) {
      this.filters.search = search;

      this.applyFilters();
    }
  }

  filterBySearch(product) {
    return product.name
      .toLowerCase()
      .includes(this.filters.search.toLowerCase());
  }

  sortByPrice(firstProduct, secondProduct) {
    if (this.filters.price === 'asc') {
      return firstProduct.price - secondProduct.price;
    }

    return secondProduct.price - firstProduct.price;
  }

  applyFilters() {
    const filteredProducts = this.products
      .filter(this.filterByCategory.bind(this))
      .filter(this.filterBySearch.bind(this))
      .sort(this.sortByPrice.bind(this));

    this.renderProducts(filteredProducts);
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
              <span class="display--block font-size--1">${formatToBRL(products.price)}</span>
            </p>

            <button class="button">Adicionar ao Carrinho</button>
          </div>
        </li>
      `);
    }, '');
  }
}


new Main();
