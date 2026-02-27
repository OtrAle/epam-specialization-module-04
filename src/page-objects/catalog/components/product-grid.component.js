const Page = require('../../base.page');

class ProductGrid extends Page {

    get container() { return $('div.container[data-test]'); }
    get productCards() { return $$('a.card[data-test^="product-"]'); }

    getProductName(card) {
        return card.$('[data-test="product-name"]');
    }

    getProductPrice(card) {
        return card.$('[data-test="product-price"]');
    }

    getProductImage(card) {
        return card.$('img');
    }

    getProductCO2(card) {
        return card.$('[data-test="co2-rating-badge"]');
    }

}

module.exports = new ProductGrid();