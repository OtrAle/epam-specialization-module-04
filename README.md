# WebdriverIO E2E Catalog Testing – Practice Software Testing

This repository contains an End-to-End (E2E) automation suite focused on testing the **Browse Products** functionality of the [Practice Software Testing application](https://practicesoftwaretesting.com/). It uses WebdriverIO with Mocha and follows the **Page Object Model** structure for clarity and scalability.

## Key Features

- **Page Object Model (POM):** Maintains separation between UI elements and test logic, with reusable components for the sidebar, grid, pagination, and navbar.
- **Component-based architecture:** Each UI section (filters, search, sort, price slider, pagination) has its own dedicated component class.
- **Centralized test data:** Multi-scenario test inputs are managed in test-data.js, enabling forEach iteration over data sets for cases like search terms, filter combinations, and pagination scenarios.
- **Comprehensive catalog coverage:** Validates product display, sorting, filtering, search, pagination, price range, and category navigation.
- **Mochawesome HTML Reports:** An HTML report is automatically generated in the /results folder after each test run, providing a visual summary of passed and failed tests.

## Requirements

- Node.js
- npm
- Git
- Google Chrome

## Installation

```bash
git clone https://github.com/OtrAle/epam-specialization-module-04
npm install
```

## Execution Commands

Run from the project root directory:

| Command | Description |
|----------|-------------|
| `npm run wdio` | Runs all browse products tests. |

## Project Structure

| Path | Purpose |
|------|----------|
| `/src/data/test-data.js` | Centralized test data and scenarios. |
| `/src/specs/catalog/` | Test specs organized by feature. |
| `/page-objects/` | Page Objects for selectors and browse products related actions. |
| `/config/wdio.conf.js` | WebdriverIO configuration file. |
| `package.json` | Dependencies and npm scripts. |
| `results` | Created when running test, contains HTML report and JSON files. |

##  Test Scenarios Covered

- ✅ UC-1 GRID: Displaying the product grid shows product name, price, image, and CO₂ rating for each product.
- ✅ UC-2 SORT: Selecting a sort option reorders the product grid according to the selected criteria.
- ✅ UC-3 PRICE RANGE: Adjusting the price range slider filters the product grid to show products within the selected range.
- ✅ UC-5 SEARCH: Entering a valid search term displays matching products in the grid.
- ✅ UC-6 SEARCH: The search input enforces minimum and maximum character length boundaries.
- ✅ UC-7 SEARCH: Entering a search term outside the allowed length boundaries does not trigger a search.
- ✅ UC-8 SEARCH: Performing a new search resets any previously applied filters.
- ✅ UC-9 SEARCH: Clearing the search input restores the default product grid state.
- ✅ UC-10 FILTERS: Selecting checkbox filters updates the product grid accordingly.
- ✅ UC-11 FILTERS: Selecting a parent category checkbox automatically selects its child categories.
- ✅ UC-12 PAGINATION: Clicking a page number navigates directly to the corresponding page.
- ✅ UC-13 PAGINATION: Clicking the pagination arrow buttons navigates to the next or previous page.
- ✅ UC-14 PAGINATION: Pagination arrow buttons are disabled when the first or last page is reached.
- ✅ UC-15 CATEGORIES: Navigating to a category from the navbar updates both the sidebar filters and the product grid.

## Author 

Laura Alejandra Hernández Martínez
