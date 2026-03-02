const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {filterParents} = require('../../data/test-data');

describe('Browse Products - Category Navigation', () => {

    beforeEach(async () => {
        await CatalogPage.open();
    });
    
    filterParents.forEach(({parent, children}) => {
        it(`UC-15: should filter products when selecting the "${parent}" category from navigation`, async () => {
            await CatalogPage.navbar.categoriesMenu.click();
            await CatalogPage.navbar.categoryOption(parent).click();
            await expect(browser).toHaveUrl(expect.stringContaining(`/category/${parent.toLowerCase().replace(' ', '-')}`));
            await expect(CatalogPage.grid.pageTitle).toHaveText(`Category: ${parent}`);

            await CatalogPage.filters.filterCheckbox(children[0]).waitForExist();
            const visibleCheckboxes = await CatalogPage.filters.visibleCheckboxes;
            await expect(visibleCheckboxes.length).toBe(children.length + 1);
        });
    });
});