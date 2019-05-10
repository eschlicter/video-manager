
var auction = {
    product: {
        name: "Test"
    
    }
};


var data = {
    products: [{name: 'Prod Name', price: 1.00}]
};



var targetRV = document.querySelector('#auction');
var grid = document.querySelector('#grid');

/// Rivets test
rivets.bind(targetRV, {auction: auction});

rivets.bind(grid, {products: data.products});