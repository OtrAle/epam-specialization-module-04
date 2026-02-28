const Page = require('../../base.page');

class Pagination extends Page {
    get nextButton() {
        return $('[aria-label="Next"]');
    }

    get prevButton() {
        return $('[aria-label="Previous"]');
    }

    get activePage() {
        return $('.page-item.active');
    }

    pageButton(number) {
        return $(`[aria-label="Page-${number}"]`);
    }
}

module.exports = new Pagination();