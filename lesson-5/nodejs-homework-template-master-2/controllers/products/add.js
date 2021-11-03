const {productsOperations} = require("../../models/products");

const add = async(req, res, next)=> {
    const result = await productsOperations.add(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}

module.exports = add;