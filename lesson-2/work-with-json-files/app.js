const productsOperations = require("./products");

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

const invokeProductsAction = async({action, id, data}) => {
    switch(action) {
        case "getAll":
            return await productsOperations.getAll();
        case "getById":
            const product = await productsOperations.getById(id);
            console.log(product);
            return product;
        case "add":
            const newProduct = await productsOperations.add(data);
            console.log(newProduct);
            return newProduct;
        case "updateById":
            const updateProduct = await productsOperations.updateById(id, data);
            console.log(updateProduct);
            return updateProduct;
        case "removeById":
            const removeProduct = await productsOperations.removeById(id);
            console.log(removeProduct);
            return removeProduct;
        default: 
            throw new Error("Unknown action");
    }
};

const id = "767580d5-f509-4f45-98f9-28e74ec4af66";

// invokeProductsAction({action: "getAll"})
// invokeProductsAction({action: "getById", id});
// const data = {
//     name: "GeForce 3090",
//     price: 55000,
//     location: "Far-far away"
// };

// invokeProductsAction({action: "add", data});
const updateId = "a784c3d3-91be-4332-926a-d769f4891c08";
// const updateData = {
//     name: "GeForce 3090",
//     price: 52000,
//     location: "Far-far away"
// };

// invokeProductsAction({
//     action: "updateById", 
//     data: updateData,
//     id: updateId
// });

invokeProductsAction({
    action: "removeById", 
    id: updateId
});