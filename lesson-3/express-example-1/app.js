const express = require("express");

const app = express();

app.get("/", (request, response)=> {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    response.send("<h2>Главная страница</h2>")
});

app.get("/products", (request, response)=> {
    response.send("<h2>Страница товаров</h2>");
});

app.get("/contacts", (request, response)=> {
    response.send("<h2>Страница контактов</h2>")
})

app.listen(3000);