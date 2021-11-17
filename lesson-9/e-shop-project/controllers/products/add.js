const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");

const {Product} = require("../../models");

const productsDir = path.join(__dirname, "../../public/products");

const add = async(req, res)=> {
    const image = gravatar.url("bogdan@gmail.com");
    const result = await Product.create({...req.body, image});
    const productFolder = path.join(productsDir, String(result._id));
    await fs.mkdir(productFolder);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}

module.exports = add;