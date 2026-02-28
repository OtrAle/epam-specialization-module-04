const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {paginationData} = require ('../../data/test-data');
 
describe('Browse Products - Pagination', () => {
   
    beforeEach(async () => {
        await CatalogPage.open();
    });
        
    it('UC-12: should navigate directly to a specific page', async () => {
        const firstCardBefore = await CatalogPage.grid.getProductId();
        await CatalogPage.pagination.pageButton(2).click();
        await CatalogPage.grid.waitUntilFirstProductChangesFrom(firstCardBefore);
        await expect(CatalogPage.pagination.activePage).toHaveText("2");
        const firstCardAfter = await CatalogPage.grid.getProductId();
        await expect(firstCardBefore).not.toBe(firstCardAfter);
    });

    paginationData.forEach(({scenario, currentPage, targetPage, arrow}) => {
        it.only(`UC-13: should navigate from ${currentPage} to ${targetPage} with the ${arrow} button to test ${scenario}`, async () => {
            await CatalogPage.pagination.pageButton(currentPage).click();
            await expect(CatalogPage.pagination.activePage).toHaveText(String(currentPage));
            const firstCardBefore = await CatalogPage.grid.getProductId();
            await CatalogPage.pagination.clickArrow(arrow);
            await CatalogPage.grid.waitUntilFirstProductChangesFrom(firstCardBefore);
            const firstCardAfter = await CatalogPage.grid.getProductId();
            await expect(CatalogPage.pagination.activePage).toHaveText(String(targetPage));
            await expect(firstCardBefore).not.toBe(firstCardAfter);
        });
    });

    it('UC-14: should disable pagination arrows at boundaries', async () => {
        const itemsLastPage = await CatalogPage.pagination.pageItems;
        await itemsLastPage.at(-2).click();
        await expect(itemsLastPage.at(-1)).toHaveElementClass('disabled');

        const itemsFirstPage = await CatalogPage.pagination.pageItems;
        await itemsFirstPage.at(1).click();
        await expect(itemsFirstPage.at(0)).toHaveElementClass('disabled');
    });
});