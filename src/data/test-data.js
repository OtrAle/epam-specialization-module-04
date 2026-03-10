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

module.exports.sortOptions = [
   'name,asc',
   'name,desc',
   'price,desc',
   'price,asc',
   'co2_rating,asc',
   'co2_rating,desc'
];

module.exports.paginationData =[
    { 
        scenario: 'Navigate forward from first page', 
        currentPage: 1, 
        arrow: 'next', 
        targetPage: 2 
    },
    { 
        scenario: 'Navigate backward from last page', 
        currentPage: 5, 
        arrow: 'previous', 
        targetPage: 4 
    },
];

module.exports.filters = [
    'Hammer',
    'ForgeFlex Tools',
    'Show only eco-friendly products',
];

module.exports.filterParents = [
    {
        parent: 'Hand Tools',
        children: ['Hammer', 'Hand Saw', 'Wrench', 'Screwdriver', 'Pliers', 'Chisels', 'Measures']
    },
    {
        parent: 'Power Tools',
        children: ['Grinder', 'Sander', 'Saw', 'Drill']
    },
    {
        parent: 'Other',
        children: ['Tool Belts', 'Storage Solutions', 'Workbench', 'Safety Gear', 'Fasteners']
    }
];

module.exports.searchTerms = [
    { 
        term: 'Hammer', 
        scenario: 'Standard term - Title Case' 
    },
    { 
        term: 'hammer', 
        scenario: 'Case sensitivity - Lowercase' 
    },
    { 
        term: 'HAMMER', 
        scenario: 'Case sensitivity - Uppercase' 
    },
    { 
        term: 'Combination Pliers', 
        scenario: 'Multi-word term' 
    },
    { 
        term: '12V', 
        scenario: 'Alphanumeric term' 
    },
];


module.exports.validLengthSearchTerms = [
    { 
        term: 'Saw', 
        length: 3, 
        scenario: 'Minimum length boundary' 
    },
    { 
        term: 'Bolt', 
        length: 4, 
        scenario: 'Just above minimum length' 
    },
    { 
        term: 'Adjustable Spanner', 
        length: 19, 
        scenario: 'Mid-range nominal length' 
    },
    { 
        term: 'Small Bench Saw with 200mm Safety Blade', 
        length: 39, 
        scenario: 'Just below maximum length' 
    },
    { 
        term: 'Small Bench Saw with 200mm Safety Blades', 
        length: 40, 
        scenario: 'Maximum length boundary' 
    },
];

module.exports.invalidLengthSearchTerms = [
    { 
        term: 'Pl', 
        length: 2, 
        scenario: 'Just below minimum length' 
    },
    { 
        term: 'Cordless Drill Combo Kit With 2 Batteries!', 
        length: 41, 
        scenario: 'Just above maximum length' 
    }
];