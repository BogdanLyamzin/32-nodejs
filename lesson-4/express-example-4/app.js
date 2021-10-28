const express = require("express");
const cors = require("cors");

const routes = require("./routes/api");

const app = express();

app.use(cors());

app.use("/api/products", routes.productsRouter); 
// обработку всех запросов, адрес которых начинается с /api/products
// или ищем в файле productsRouter

app.use((req, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.listen(3000);