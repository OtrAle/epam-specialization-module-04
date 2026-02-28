const CatalogPage = require('../../page-objects/catalog/catalog.page');
const {paginationData} = require ('../../data/test-data');
 
describe('Browse Products - Pagination', () => {
   
    beforeEach(async () => {
        await CatalogPage.open();
    });
        
    it.only('UC-12: should navigate directly to a specific page', async () => {
        const firstCardBefore = await CatalogPage.grid.getProductId();
        await CatalogPage.pagination.pageButton(2).click();
        await CatalogPage.grid.waitUntilFirstProductChangesFrom(firstCardBefore);
        await expect(CatalogPage.pagination.activePage).toHaveText("2");
        const firstCardAfter = await CatalogPage.grid.getProductId();
        await expect(firstCardBefore).not.toBe(firstCardAfter);
    });


    paginationData.forEach()
    it(`UC-13: should navigate through pages using arrow button`, async () => {


    
    });

    it('UC-14: should disable pagination arrows at boundaries', async () => {
    
    });
});