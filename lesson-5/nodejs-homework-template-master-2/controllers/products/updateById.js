const { NotFound } = require("http-errors");

const productsOperations = require("../../models/products");

const updateById = async (req, res, next) => {
    const { id } = req.params;
    const result = await productsOperations.updateById(id, req.body);
    if (!result) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })

}

module.exports = updateById