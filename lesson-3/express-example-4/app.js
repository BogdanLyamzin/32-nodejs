const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

app.get("/products", (req, res)=> {
    res.json(products);
});

app.listen(3000);