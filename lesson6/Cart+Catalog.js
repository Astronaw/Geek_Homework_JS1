'use strict';

const catalog = {
    catalogBlock: null,
    itemButtonAdd: null,
    cart: {},

    //список товаров
    catalogList: [
        {
            id_product: 1,
            product_name: 'Хлеб',
            price: 45,
        },
        {
            id_product: 2,
            product_name: 'Молоко',
            price: 65,
        },
        {
            id_product: 3,
            product_name: 'Спички',
            price: 10,
        },
        {
            id_product: 4,
            product_name: 'Масло',
            price: 90,
        },
        {
            id_product: 5,
            product_name: 'Сыр',
            price: 150,
        }
    ],

    //инициализация каталога
    init() {
        this.catalogBlock = document.querySelector('.catalog');
        this.cart = cart;
        this.render();
        this.catalogBlock.addEventListener('click', event => this.addToCart(event));
    },

    //рендер каталога (пустого / с товаром)
    render() {
        if (!this.catalogList.length) {
            this.catalogBlock.innerHTML = '';
            this.catalogBlock.insertAdjacentHTML('beforeend', '<h3>Товар закончился :(</h3>');
            return;
        }
        this.catalogBlock.innerHTML = '';
        this.catalogList.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    //рендер отдельного товара
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product_add" data-id_product="${item.id_product}">В корзину</button>
                </div>`;
    },

    addToCart(event) {
        if (!event.target.classList.contains('product_add')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToCart(id_product);
    }

}

const cart = {
    cartBlock: null,
    cartButton: null,
    catalogList: [],
    goods: [],

    //инициализация корзины
    init() {
        this.cartBlock = document.querySelector('.cart');
        this.cartButton = document.querySelector(`.cart_clear`);
        this.catalogList = catalog.catalogList;
        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.cartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    //рендер корзины
    render() {
        if (this.goods.length > 0) {
            this.cartBlock.innerHTML = '';
            this.renderCartList();
        } else {
            this.cartBlock.innerHTML = '';
            this.cartBlock.insertAdjacentHTML('beforeend', '<h3>В корзине нет товаров</h3>');
        }
    },

    //рендер списка товаров добавленных в корзину
    renderCartList() {
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    //рендер отдельного товара в корзине
    renderCartItem(item) {
        return `<div class="cart_item">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
                </div>`;
    },

    findProductInCatalog(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToCart(id_product) {
        const product = this.findProductInCatalog(id_product);

        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },


}

catalog.init();
cart.init();
