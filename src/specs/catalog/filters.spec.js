const CatalogPage = require('../../page-objects/catalog/catalog.page');

describe('Browse Products - Checkbox Filters', () => {

    beforeEach(async () => {
        await CatalogPage.open();
    });
    
    //Add a forEach
    it(`UC-10: should update the product grid when the filter "${filterName}" is applied`, async () => {

    });

    //Add a forEach
    it(`UC-11: should sync selection for parent category "${parent}" and its subcategories`, async () => {

    });
});