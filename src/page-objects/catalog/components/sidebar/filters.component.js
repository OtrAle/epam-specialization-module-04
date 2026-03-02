const Page = require('../../../base.page');

class Filters extends Page {
   filterCheckbox(name) {
    return $(`//label[normalize-space(text())="${name}"]//input`);
    }
}

module.exports = new Filters();