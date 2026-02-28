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

    get disabledButton() {
        return $('.page-item.disabled');
    }

    get pageItems() {
        return $$('.page-item');
    }

    pageButton(number) {
        return $(`[aria-label="Page-${number}"]`);
    }

    async clickArrow(arrow) {
        if (arrow === 'next') {
            await this.nextButton.click();
        } else {
            await this.prevButton.click();
        }
    }
}

module.exports = new Pagination();