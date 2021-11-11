const {BadRequest, NotFound, Unauthorized} = require("http-errors");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const {SECRET_KEY} = process.env;

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password)){
        throw new BadRequest("Wrong email or password");
    }
    // if(!user){
    //     throw new NotFound(`User with email=${email} not found`);
    // }
    // const compareResult = bcrypt.compareSync(password, user.password);
    // if(!compareResult){
    //     throw new Unauthorized("Password wrong");
    // }
    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    await User.findByIdAndUpdate(user._id, {token});
    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })
}

module.exports = login;