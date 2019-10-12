const Catalog = {
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],
};

for (key in Catalog.goods) {
    document.querySelector('.new_catalog').innerHTML += `<p>${Catalog.goods[key].product_name}</p><p>${Catalog.goods[key].price}</p>
<button id='${Catalog.goods[key].id_product}' class='btnSendToCard'>Добавить</button>`;
}

let btnSendToCard = document.getElementsByClassName('btnSendToCard');

let sendToCart = (e) => {

    console.log('Добавляем что-то в корзину', e.target.id);

    for (key in Catalog.goods) {
        if (Catalog.goods[key].id_product == e.target.id) {
            cart.goods.push(Catalog.goods[key]);
        }
    }
    cart.render();
};

[...btnSendToCard].map(element => {
    element.addEventListener('click', sendToCart);
});

const cart = {
    cartListBlock: null,
    cartButton: null,
    goods: [],

    render() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');

        if (this.goods.length > 0) {
            this.cartListBlock.textContent = `В корзине ${this.goods.length} товаров(а) стоимостью ${this.getCartPrice()}`;
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }

        this.cartButton.addEventListener('click', this.dropCart.bind(this));
    },
    getCartPrice() {
        return this.goods.reduce((price, good) => {
            return price + good.price * good.quantity;
        }, 0);
    },
    dropCart() {
        this.goods = [];
        this.render();
    },
    cartItem(name, price) {
        return `<div>
                <div class="cart-title">${name}</div>
                <div class="cart-price">${price}</div>
            </div>`;
    },
};

cart.render();
