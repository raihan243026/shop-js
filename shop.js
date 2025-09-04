// let shop = {
//   products: [
//     { name: "Rice", price: 50, stock: 10 },
//     { name: "Oil", price: 120, stock: 3 },
//     { name: "Sugar", price: 40, stock: 7 },
//     { name: "Salt", price: 20, stock: 0 }
//   ],
// //   method to add a new product
//     addProduct(name, price, stock) {
//         this.products.push({ name, price, stock });
//         console.log(`Product ${name} added successfully.`);
//     },
// //   method to update stock of a product

//     // updateStock: function(name, newStock) {
//     //     let product = this.products.find(p => p.name === name);
//     //     if (product) {
//     //         product.stock = newStock;
//     //         console.log(`Stock for ${name} updated to ${newStock}.`);
//     //     } else {
//     //         console.log(`Product ${name} not found.`);
//     //     }
//     // },
// //   method to display available products
// //     displayProducts: function() {
// //         console.log("Available Products:");
// //         this.products.forEach(product => {
// //             if (product.stock > 0) {
// //                 console.log(`${product.name} - Price: $${product.price}, Stock: ${product.stock}`);
// //             }
// //         });
// //     }
// // };

// // // Example usage:
// // shop.displayProducts();
// // shop.addProduct("Wheat", 60, 15);
// // shop.updateStock("Oil", 5);
// // shop.displayProducts();

 

// // method to sell a product and update stock.
// sellProduct(name, quantity) {
//     let product = this.products.find(p => p.name === name);
//     if (!product) {
//         console.log(`Product ${name} not found.`);
//         return;
//     }
//     if (product.stock < quantity) {
//         console.log(`Insufficient stock for ${name}. Available stock: ${product.stock}.`);
//         return;
//     }
//     product.stock -= quantity;
//     let totalPrice = product.price * quantity;
//     console.log(`Sold ${quantity} of ${name}. Total price: $${totalPrice}.`);
// },

// //  function to check which products have low stock.
// checkLowStock(threshold) {
//     console.log(`Products with stock below ${threshold}:`);
//     this.products.forEach(product => {
//         if (product.stock < threshold) {
//             console.log(`${product.name} - Stock: ${product.stock}`);
//         }
//     });
// }
// };checkLowStock(5);
// //  displayProducts: function() {
// //       console.log("Available Products:");
// //         this.products.forEach(product => {
// //             if (product.stock > 0) {
// //                 console.log(`${product.name} - Price: $${product.price}, Stock: ${product.stock}`);
// //             }
// //         });
// //     }

// // checkLowStock: function(threshold) {
// //     console.log(`\n--- Checking for products with stock below ${threshold} ---`);
    
// //     // .filter() ব্যবহার করে কম স্টক আছে এমন পণ্য খুঁজে বের করা
// //     const lowStockProducts = this.products.filter(product => product.stock < threshold);
    
// //     // নতুন অ্যারের উপর লুপ চালানো
// //     lowStockProducts.forEach(product => {
// //         console.log(`ALERT: ${product.name} needs to be restocked! Current stock: ${product.stock}`);
// //     });
// // }
// // checkLowStock: function(threshold) {
// //     console.log(`Products with stock below ${threshold}:`);
// //     this.products.forEach(product => {
// //         if (product.stock < threshold) {
// //             console.log(`${product.name} - Stock: ${product.stock}`);
// //         }
// //     });
// // }
// // };

// // // Example usage:
// // shop.displayProducts();
// // shop.addProduct("Wheat", 60, 15);
// // shop.sellProduct("Oil", 2);
// // shop.sellProduct("Salt", 1);
// // shop.sellProduct("Rice", 5);
// // shop.displayProducts();
// // shop.checkLowStock(5);
// // ,


// // --- Task Flow: Demonstrating the system's functionality ---

// // Add new product.
// shop.addProduct("Tea", 35, 12);

// // Sell a few products.
// shop.sellProduct("Rice", 2);
// shop.sellProduct("Oil", 4); // This will show insufficient stock.
// shop.sellProduct("Sugar", 3);

// // Display the current stock of all products using a loop.
// shop.displayAllProducts();

// // Check for low stock (threshold of 5).
// shop.checkLowStock(5);


// console.log(`\n Total value of items sold: $${shop.totalSalesValue}`);

// console.log(` Most sold product: ${shop.getMostSoldProduct()}`);

let shop = {
  products: [
    { name: "Rice", price: 50, stock: 10 },
    { name: "Oil", price: 120, stock: 3 },
    { name: "Sugar", price: 40, stock: 7 },
    { name: "Salt", price: 20, stock: 0 }
  ],
  sales: [], // To track sales for totalSalesValue and getMostSoldProduct

  // Method to add a new product
  addProduct(name, price, stock) {
    this.products.push({ name, price, stock });
    console.log(`Product ${name} added successfully.`);
  },

  // Method to sell a product and update stock
  sellProduct(name, quantity) {
    let product = this.products.find(p => p.name === name);
    if (!product) {
      console.log(`Product ${name} not found.`);
      return;
    }
    if (product.stock < quantity) {
      console.log(`Insufficient stock for ${name}. Available stock: ${product.stock}.`);
      return;
    }
    product.stock -= quantity;
    let totalPrice = product.price * quantity;
    this.sales.push({ name, quantity, totalPrice }); // Track sales
    console.log(`Sold ${quantity} of ${name}. Total price: $${totalPrice}.`);
  },

  // Method to display all products (even with zero stock)
  displayAllProducts() {
    console.log("All Products:");
    this.products.forEach(product => {
      console.log(`${product.name} - Price: $${product.price}, Stock: ${product.stock}`);
    });
  },

  // Method to check which products have low stock
  checkLowStock(threshold) {
    console.log(`Products with stock below ${threshold}:`);
    this.products.forEach(product => {
      if (product.stock < threshold) {
        console.log(`${product.name} - Stock: ${product.stock}`);
      }
    });
  },

  // Method to calculate total value of items sold
  totalSalesValue() {
    return this.sales.reduce((total, sale) => total + sale.totalPrice, 0);
  },

  // Method to find the most sold product by quantity
  getMostSoldProduct() {
    if (this.sales.length === 0) return "No sales recorded.";
    const salesByProduct = this.sales.reduce((acc, sale) => {
      acc[sale.name] = (acc[sale.name] || 0) + sale.quantity;
      return acc;
    }, {});
    const mostSold = Object.entries(salesByProduct).reduce((a, b) => (a[1] > b[1] ? a : b));
    return mostSold[0];
  }
};

// Task Flow: Demonstrating the system's functionality
shop.addProduct("Tea", 35, 12);
shop.sellProduct("Rice", 2);
shop.sellProduct("Oil", 4); // This will show insufficient stock
shop.sellProduct("Sugar", 3);
shop.displayAllProducts();
shop.checkLowStock(5);
console.log(`\nTotal value of items sold: $${shop.totalSalesValue()}`);
console.log(`Most sold product: ${shop.getMostSoldProduct()}`);