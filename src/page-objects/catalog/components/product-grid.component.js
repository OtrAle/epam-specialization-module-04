const Page = require('../../base.page');

class ProductGrid extends Page {
    get container() { 
        return $('div.container[data-test]'); 
    }
    
    get productCards() { 
        return $$('a.card[data-test^="product-"]'); 
    }

    get noResults() { 
        return $('[data-test="no-results"]')
    }

    get sortingCompleted() {
        return $('[data-test="sorting_completed"]');
    }

    get filterCompleted() {
        return $('[data-test="filter_completed"]');
    }

    get searchCompleted() {
        return $('[data-test="search_completed"]');
    }

    get pageTitle() {
        return $('[data-test="page-title"]');
    }

    get searchCaption() {
        return $('[data-test="search-term"]');
    }

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

   async getProductId(index = 0) {
        const cards = await this.productCards;
        return await cards[index].getAttribute('data-test');
    }

    async waitUntilFirstProductChangesFrom(previousId) {
        await browser.waitUntil(async () => {
            const currentId = await this.getProductId();
            return currentId !== previousId;
        });
    }
}

module.exports = new ProductGrid();