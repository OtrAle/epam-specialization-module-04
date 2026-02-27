const CatalogPage = require('../../page-objects/catalog/catalog.page');

describe('Browse products - Search Functionality', () => {

        beforeEach(async () => {
            await CatalogPage.open();
        });
    
        describe('Validation rules', () => {
            
            // Add a forEach
            it('UC-5: should filter products using ${description}: "${term}"`', async () => {

            });

            // Add a forEach
            it(`UC-6: should accept search term within length limits: "${term.length} chars"`, async () => {

            });

            // Add a forEach
            it(`UC-7: should reject search terms outside length limits: "${term.length} chars"`, async () => {

            });
        });

        describe('State management', () => {
           
            it('UC-8: should reset active filters when performing a new search', async () => {

            });

             it('UC-9: should restore the full product list when clearing search', async () => {

            });
        });

  

});