const fs = require("fs/promises");
const path = require("path");
const { NotFound } = require("http-errors");
const moment = require("moment");

const {Product} = require("../../models");
const { nextTick } = require("process");

const productsDir = path.join(__dirname, "../../public/products");

const updateImage = async (req, res) => {
    const { id } = req.params;
    const {path: tempUpload, originalname} = req.file;
    try {
        const date = moment().format("DD-MM-YYYY_hh-mm-ss");
        const filename = `${id}_${date}_${originalname}`;
        const resultUpload = path.join(productsDir, id, filename);
        await fs.rename(tempUpload, resultUpload);
        const image = path.join("/products", id, filename);
        const result = await Product.findByIdAndUpdate(id, {image}, {new: true});
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
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }

}

module.exports = updateImage