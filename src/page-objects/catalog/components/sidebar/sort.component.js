const Page = require('../../../base.page');

class Sort extends Page {

    get sortDropdown() {
        return $('[data-test="sort"]'); 
    }
}

module.exports = new Sort();