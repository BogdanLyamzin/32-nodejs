const fs = require("fs/promises");

const productsPath = require("./productsPath");

const updateProducts = async(newProducts)=> {
    const productsStr = JSON.stringify(newProducts);
    await fs.writeFile(productsPath, productsStr);
};

module.exports = updateProducts;