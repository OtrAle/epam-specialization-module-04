const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {filters, filterParents} = require('../../data/test-data');

describe('Browse Products - Checkbox Filters', () => {

    beforeEach(async () => {
        await CatalogPage.open();
    });
    
    filters.forEach((filterName) => {
        it(`UC-10: should update the product grid when the filter "${filterName}" is applied`, async () => {
            await CatalogPage.filters.filterCheckbox(filterName).click();
            await expect(CatalogPage.filters.filterCheckbox(filterName)).toBeChecked();
            await CatalogPage.grid.filterCommpleted.waitForExist();
            await expect(CatalogPage.grid.filterCommpleted).toExist();
        });
    });

    filterParents.forEach(({parent, children}) => {
        it.only(`UC-11: should auto-select all subcategories when "${parent}" is selected`, async () => {
            await CatalogPage.filters.filterCheckbox(parent).click();
            await expect(CatalogPage.filters.filterCheckbox(parent)).toBeChecked();
            for (const child of children) {
                await expect(CatalogPage.filters.filterCheckbox(child)).toBeChecked();
        }
            await CatalogPage.grid.filterCommpleted.waitForExist();
            await expect(CatalogPage.grid.filterCommpleted).toExist();


        });
    });
});