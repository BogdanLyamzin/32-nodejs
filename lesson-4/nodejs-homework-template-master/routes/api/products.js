const express = require("express");
// const createError = require("http-errors");
const {NotFound, BadRequest} = require("http-errors");
const Joi = require("joi");

const productsOperations = require("../../models/products");

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required(),
});

const router = express.Router();

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар полностью по id.
5. Удалить товар по id.
*/

router.get("/", async(req, res, next)=> {
    try {
        const result = await productsOperations.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
        // res.json(products);
    } catch (error) {
        next(error);
        // res.status(500).json({
        //     status: "error",
        //     code: 500,
        //     message: "Server error"
        // })
    }
});
// /api/products/gfr24tsa-fgdf
router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.getById(id);
        if(!result){
            throw new NotFound(`Product with id=${id} not found`);
            // throw new createError(404, `Product with id=${id} not found`);
            // const error = new Error(`Product with id=${id} not found`);
            // error.status = 404;
            // throw error;

            // res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Product with id=${id} not found`
            // });
            // return;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
});

router.post("/", async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
        }
        const result = await productsOperations.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
        }
        const {id} = req.params;
        const result = await productsOperations.updateById(id, req.body);
        if(!result){
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
        next(error);
    }
})

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.removeById(id);
        if(!result){
            throw new NotFound(`Product with id=${id} not found`);
        }
        // res.status(204).json()
        res.json({
            status: "success",
            code: 200,
            message: "Remove success"
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;