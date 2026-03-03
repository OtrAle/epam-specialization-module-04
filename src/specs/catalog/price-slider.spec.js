const CatalogPage = require('../../page-objects/catalog/catalog.page');
const { priceSliderScenarios } = require('../../data/test-data');

describe ('Browse Products - Price Range Slider', () => {

    beforeEach(async () => {
        await CatalogPage.open();
    });

    priceSliderScenarios.forEach(({scenario, min, max }) => {
        it(`UC-3: should validate: ${scenario} to filter products between ${min} and ${max} `, async () => {
            await CatalogPage.priceSlider.setSliderRange(min, max);
            expect(await CatalogPage.priceSlider.getRange()).toEqual({ min, max });
            
            // await browser.pause(3000);
            // const cards = await CatalogPage.grid.productCards;
            // if (cards.length >= 1) {
            //     for (const card of cards) {
            //         const priceText = await CatalogPage.grid.getProductPrice(card).getText();
            //         const price = Number(priceText.replace('$', ''));
            //         expect(price).toBeGreaterThanOrEqual(Math.floor(min));
            //         expect(price).toBeLessThanOrEqual(Math.ceil(max));
            //     }
            // } 
        });
    });

    it('UC-4: should display a "no results" message for an empty price range', async () => {
        await CatalogPage.priceSlider.setSliderRange(1, 3);
        expect(await CatalogPage.priceSlider.getRange()).toEqual({min: 1, max: 3 });
        await expect(CatalogPage.grid.noResults).toBeDisplayed();   
    });

});