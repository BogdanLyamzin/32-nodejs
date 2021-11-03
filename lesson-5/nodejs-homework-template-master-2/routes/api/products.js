const express = require("express");

const {products: ctrl} = require("../../controllers");
/*
const ctrl = require("../../controllers").products;
*/
const {validation, controllerWrapper} = require("../../middlewares");
const {joiProductSchema} = require("../../validations")

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiProductSchema), controllerWrapper(ctrl.add));

router.put("/:id", validation(joiProductSchema), controllerWrapper(ctrl.updateById))

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;