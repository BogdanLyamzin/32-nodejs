const express = require("express");

const router = express.Router();

const products = require("../../products");

router.get("/", (req, res)=> {
    res.json(products);
});

router.get("/:id", (req, res)=> {
    res.json(products[0]);
});

router.post("/", (req, res)=> {
    res.json(products);
});

router.put("/:id", (req, res)=> {
    res.json(products);
});

router.delete("/:id", (req, res)=> {
    res.json(products);
});

module.exports = router;