const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const removeById = require("./removeById")
const updatePrice = require("./updatePrice")

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    updatePrice,
    removeById
}