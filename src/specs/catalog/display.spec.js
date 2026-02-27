const CatalogPage = require('../../page-objects/catalog/catalog.page');

describe('Browse Products - Display Grid', () => {
       
        it ('UC-1: should display each product with name, price, image, and CO2 rating', async () => {
            await CatalogPage.open();
            await expect(CatalogPage.grid.container).toBeDisplayed();
            await expect(CatalogPage.grid.productCards).toBeElementsArrayOfSize({ gte: 1 });
            for (const card of await CatalogPage.grid.productCards) {
                await expect(CatalogPage.grid.getProductName(card)).toBeDisplayed();
                await expect(CatalogPage.grid.getProductPrice(card)).toBeDisplayed();
                await expect(CatalogPage.grid.getProductImage(card)).toBeDisplayed();
                await expect(CatalogPage.grid.getProductCO2(card)).toBeDisplayed();
            }
        }); 
}); 
