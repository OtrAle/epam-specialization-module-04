const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {searchTerms, validLengthSearchTerms, invalidLengthSearchTerms, filters} = require('../../data/test-data');

describe('Browse products - Search Functionality', () => {

    beforeEach(async () => {
        await CatalogPage.open();
        await browser.maximizeWindow();
    });

    afterEach(async () => {
        await browser.deleteCookies()
    });
    
    describe('Browse products - Search Functionality - Validation Rules', () => {
            
        searchTerms.forEach(({scenario, term}) => {
            it(`UC-5: should display products containing "${term}" to test "${scenario}"`, async () => {
                await CatalogPage.search.searchInput.setValue(term);
                await CatalogPage.search.searchSubmit.click();
                await CatalogPage.grid.searchCompleted.waitForExist();
                await expect(CatalogPage.grid.searchCaption).toHaveText(term);
                const cards = await CatalogPage.grid.productCards;
                for (const card of cards) {
                    const name = await CatalogPage.grid.getProductName(card).getText();
                    await expect(name.toLowerCase()).toContain(term.toLowerCase());
                }
            });
        });

        validLengthSearchTerms.forEach(({scenario, length, term}) => {
            it(`UC-6: should accept search term of ${length} characters to test "${scenario}"`, async () => {
                await CatalogPage.search.searchInput.setValue(term);
                await CatalogPage.search.searchSubmit.click();
                await CatalogPage.grid.searchCompleted.waitForExist();
                await expect(CatalogPage.grid.searchCaption).toHaveText(term);
            });
        });

        invalidLengthSearchTerms.forEach(({scenario, length, term}) => {
            it(`UC-7: should reject search term of ${length} characters to test "${scenario}"`, async () => {
                await CatalogPage.search.searchInput.setValue(term);
                await CatalogPage.search.searchSubmit.click();
                await expect(CatalogPage.grid.searchCaption).not.toExist({ wait: 500 });
            });
        });

    });

    describe('Browse products - Search Functionality - State Management', () => {
       
        it('UC-8: should reset active filters when performing a new search', async () => {
            await CatalogPage.filters.ecoFriendlyFilter.click();
            await CatalogPage.search.searchInput.setValue("hammer");
            await CatalogPage.search.searchSubmit.click();
            await CatalogPage.grid.searchCompleted.waitForExist();
            await expect(CatalogPage.filters.ecoFriendlyFilter).not.toBeChecked();
        });

        it('UC-9: should restore the full product list when clearing search', async () => {
            await CatalogPage.search.searchInput.setValue('hammer');
            await CatalogPage.search.searchSubmit.click();
            await CatalogPage.grid.searchCompleted.waitForExist();
            await expect(CatalogPage.grid.searchCaption).toHaveText('hammer');
            await CatalogPage.search.searchReset.click();
            await expect(CatalogPage.grid.searchCaption).not.toExist();
        });

    });

});