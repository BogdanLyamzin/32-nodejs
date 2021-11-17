const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {v4} = require("uuid");

const app = express();

app.use(cors());
app.use(express.static("public"));

const products = [];

const tempDir = path.join(__dirname, "temp");
const productsDir = path.join(__dirname, "public/products");

const uploadConfig = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    },
    limits: {
        fileSize: 2048
    }
});

const uploadMiddleware = multer({
    storage: uploadConfig
});

app.get("/api/products", async(req, res)=> {
    res.json(products)
})

app.post("/api/products", uploadMiddleware.single("file"), async(req, res)=> {
    const {path: tempUpload, originalname} = req.file;
    const resultUpload = path.join(productsDir, originalname);
    try {
        await fs.rename(tempUpload, resultUpload);
        const src = path.join("/products", originalname)
        const newProduct = {...req.body, src, id: v4()};
        products.push(newProduct);
        res.status(201).json(newProduct)
    } catch (error) {
        await fs.unlink(tempUpload);
    }

})

app.listen(3000);