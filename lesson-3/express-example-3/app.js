const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");

const products = require("./products");

const app = express();

app.use(async(req, res, next)=> {
    const {url, method} = req;
    const date = moment().format("DD.MM.YYYY_hh:mm:ss:ms");
    await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
    next();
});
// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// });

app.get("/products", (req, res)=> {
    res.json(products);
})


app.listen(3000);