const express = require("express");

const {products: ctrl} = require("../../controllers");

const {validation, authenticate, controllerWrapper} = require("../../middlewares");
const {joiSchema} = require("../../models/product")

const router = express.Router();

router.get("/", authenticate, controllerWrapper(ctrl.getAll));

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

router.post("/", authenticate, validation(joiSchema), controllerWrapper(ctrl.add));

router.put("/:id", authenticate, validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch("/:id/price", authenticate, controllerWrapper(ctrl.updatePrice))

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;