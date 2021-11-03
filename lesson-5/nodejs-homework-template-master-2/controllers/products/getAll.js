const {productsOperations} = require("../../models/products");

const getAll = async(req, res)=> {
    const result = await productsOperations.getAll();
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
}

module.exports = getAll;