const Page = require('../../../base.page');

class Search extends Page {
    get searchInput() {
        return $('[data-test="search-query"]');
    }

    get searchSubmit() {
        return $('[data-test="search-submit"]');
    }

    get searchReset() {
        return $('[data-test="search-reset"]');
    }
}

module.exports = new Search();