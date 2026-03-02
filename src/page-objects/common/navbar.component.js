const Page = require('../base.page');

class Navbar extends Page {
    get categoriesMenu() {
        return $('[data-test="nav-categories"]');
    }

    categoryOption(name) {
        return $(`[data-test="nav-${name.toLowerCase().replace(' ', '-')}"]`);
    }
}

module.exports = new Navbar();