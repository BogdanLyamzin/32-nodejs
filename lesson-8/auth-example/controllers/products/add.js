const {Product} = require("../../models");

const add = async(req, res)=> {
    const newProduct = {...req.body, owner: req.user._id};
    const result = await Product.create(newProduct);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}

module.exports = add;