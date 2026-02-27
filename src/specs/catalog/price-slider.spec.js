const CatalogPage = require('../../page-objects/catalog/catalog.page');
const { priceSliderScenarios } = require('../../data/test-data');

describe ('Browse Products - Price Range Slider', () => {

    beforeEach(async () => {
        await CatalogPage.open();
    });

    priceSliderScenarios.forEach(({scenario, min, max }) => {
        it(`UC-3: should validate: ${scenario} to filter products between ${min} and ${max} `, async () => {
            await CatalogPage.priceSlider.setSliderRange(min, max);
            expect(await CatalogPage.priceSlider.getDisplayedRange()).toEqual({ min, max });

        });
    });

    it('UC-4: should display a "no results" message for an empty price range', async () => {
        await CatalogPage.priceSlider.setSliderRange(1, 3);
        expect(await CatalogPage.priceSlider.getDisplayedRange()).toEqual({min: 1, max: 3 });
    });

});