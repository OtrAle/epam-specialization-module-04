// UC-3 PRICE RANGE SLIDER
module.exports.priceSliderScenarios = [
    { 
        scenario: 'Lower Boundary', 
        min: 0, 
        max: 50 
    },
    { 
        scenario: 'Upper Boundary', 
        min: 150, 
        max: 200 
    },
    { 
        scenario: 'Just Inside Boundaries', 
        min: 1, 
        max: 199 
    },
    { 
        scenario: 'Single Point Boundary', 
        min: 100, 
        max: 100 
    },
    { 
        scenario: 'Mid-Range', 
        min: 40, 
        max: 160 
    }
];

// UC-2 SORT 
module.exports.sortOptions = [
   'name,asc',
   'name,desc',
   'price,desc',
   'price,asc',
   'co2_rating,asc',
   'co2_rating,desc'
];