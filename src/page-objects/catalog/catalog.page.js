const Page = require('../base.page');
const ProductGrid = require('./components/product-grid.component');
const Pagination = require('./components/pagination.component');
const Filters = require('./components/sidebar/filters.component');
const PriceSlider = require('./components/sidebar/price-slider.component');
const Search = require('./components/sidebar/search.component');
const Sort = require('./components/sidebar/sort.component');
const Navbar = require('../common/navbar.component');

class CatalogPage extends Page {
    get grid() {
        return ProductGrid;
    }
     
    get pagination() {
        return Pagination;
    }

    get filters() {
        return Filters;
    }

    get priceSlider() {
        return PriceSlider;
    }

    get search() {
        return Search;
    }

    get sort() {
        return Sort;
    }
    get navbar() {
        return Navbar;
    }


    async open() {
        await super.open("/");
    }
}

module.exports = new CatalogPage();