const express = require("express");

const {validation, authenticate, controllerWrapper} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");
const {joiSchema} = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));
// router.post("/signup")

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login))
// router.post("/signin")

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
// router.get("/signout")

router.get("/verify/:verificationToken", controllerWrapper(ctrl.verify));
module.exports = router;