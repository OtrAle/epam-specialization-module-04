const Page = require('../../../base.page');

class Filters extends Page {
   filterCheckbox(name) {
        return $(`//label[normalize-space(text())="${name}"]//input`);
    }
    
    get visibleCheckboxes() {
        return $$('input.icheck[name="category_id"]');
    }
}

module.exports = new Filters();