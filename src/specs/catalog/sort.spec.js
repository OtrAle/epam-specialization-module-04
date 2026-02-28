const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {sortOptions} = require('../../data/test-data');

describe ('Browse Products - Sorting Logic', ()=> {
    beforeEach(async () => {
        await CatalogPage.open();
    });
    
    sortOptions.forEach((option) => {
        it (`UC-2: should sort products correctly by ${option}`, async () => {
            await CatalogPage.sort.sortDropdown.click();
            await CatalogPage.sort.sortDropdown.selectByAttribute("value", option);
            await CatalogPage.grid.sortingCompleted.waitForExist();
            await expect(CatalogPage.grid.sortingCompleted).toExist();
        });
    });
});