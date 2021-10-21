const fs = require("fs/promises");

const productsPath = require("./productsPath");

const getAll = async() => {
    const data = await fs.readFile(productsPath);
    const products = JSON.parse(data);
    return products;
};

module.exports = getAll;