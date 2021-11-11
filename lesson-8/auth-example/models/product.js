const {Schema, model} = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^[0-9]{10}$/

const productSchema = Schema({
    name: {
        type: String,
        required: true,
        // minlengh:
        // maxlength:
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
        // max: 1000000
    },
    location: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
    // "sale", "stock", "promocode"
    // status: {
    //     type: String,
    //     enum: ["sale", "stock", "promocode"],
    //     default: "sale"
    // },
    // code: {
    //     type: String,
    //     required: true,
    //     match: codeRegexp
    // }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required(),
    // status: Joi.string(),
    // code: Joi.string().pattern(codeRegexp)
});

const Product = model("product", productSchema);
// categories => model("category")
// mice => model("mouse")

module.exports = {
    Product,
    joiSchema
};