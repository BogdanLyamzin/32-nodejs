const productsOperations = require("../../models/products");

const removeById = async(req, res)=> {
    const {id} = req.params;
    const result = await productsOperations.removeById(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    // res.status(204).json()
    res.json({
        status: "success",
        code: 200,
        message: "Remove success"
    })
}

module.exports = removeById