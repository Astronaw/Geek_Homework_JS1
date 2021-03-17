'use strict';

//создадим HTML разметку для корзины
document.querySelector('body').insertAdjacentHTML("afterbegin", `<div class='cart'><div class="cart__list"></div><button class="cart__button">Clear</button></div>`);

const cart = {
    cartList: null,
    cartButton: null,
    products: [
        {
            id: 1,
            name: 'соль',
            price: 500,
            quantity: 4,
        },
        {
            id: 2,
            name: 'перец',
            price: 700,
            quantity: 3,
        },
        {
            id: 3,
            name: 'сахар',
            price: 800,
            quantity: 1,
        },
        {
            id: 4,
            name: 'мука',
            price: 250,
            quantity: 2,
        },
    ],

    init() {
        this.cartList = document.querySelector('.cart__list');
        this.cartButton = document.querySelector('.cart__button');
        this.cartButton.addEventListener('click', this.clear.bind(this));
        this.render();
    },

    render() {
        if (this.products.length !== 0) {
            this.products.forEach(product => {
                this.cartList.insertAdjacentHTML("beforeend", `<p><b>${product.name}</b> | <i>цена: ${product.price} рублей, кол-во: ${product.quantity}</i></p>`);
            });
            this.cartList.insertAdjacentHTML("beforeend", `<b>Итого: </b>${this.products.length} товара(ов) на сумму ${this.total()} рублей`);
        } else {
            this.cartList.textContent = 'В корзине пусто!';
        }
    },

    total() {
        return this.products.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0);
    },

    clear() {
        this.products = [];
        this.render();
    }

}

cart.init();
