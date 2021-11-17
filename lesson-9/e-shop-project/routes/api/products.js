const express = require("express");

const {products: ctrl} = require("../../controllers");
/*
const ctrl = require("../../controllers").products;
*/
const {validation, upload, controllerWrapper} = require("../../middlewares");
const {joiSchema} = require("../../models/product")

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch("/:id/price", controllerWrapper(ctrl.updatePrice));

router.patch("/:id/image", upload.single("image"), controllerWrapper(ctrl.updateImage));

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;