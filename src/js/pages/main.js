import { getProducts } from "../mocks/products.js";

class Main {
  constructor(){
    this.products = [];
    this.renderElement = document.querySelector('#product-list');

    this.init();
  }

  init() {
    this.setCategoryFieldListener();
    this.setSearchFieldListener();

    this.products = getProducts();

    this.renderProducts(this.products);
  }

  setCategoryFieldListener() {
    const categoryField = document.querySelector('#category-field');

    categoryField.addEventListener('change', this.handleCategoryFilter.bind(this));
  }

  handleCategoryFilter(event){
    const selectedCategory = event.target.value;

      if (selectedCategory === 'all') {
        this.renderProducts(this.products);

        return;
      }

      let filteredProducts = this.products.filter((product) => {
          return product.category === selectedCategory;
      });

      this.renderProducts(filteredProducts);
  }

  setSearchFieldListener(){
    const searchField = document.querySelector('#search-field');

    searchField.addEventListener('input', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(){
    const searchText = event.target.value;

    let filteredProducts = this.products.filter(products => {
      return products.name.toLowerCase().includes(searchText.toLowerCase());
    })

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
            <p class="card_info_text">${products.name}
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
