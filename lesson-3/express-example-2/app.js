const express = require("express");

const products = require("./products");

const app = express();

// app.set("json space", 8);

app.get("/", (req, res)=> {
    res.send("<h2>Главная страница</h2>");
})

app.get("/products", (req, res)=> {
    res.json(products);
    // res.json(null)
    // res.send(null)
});

app.listen(3000);