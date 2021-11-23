const {NotFound} = require("http-errors");

const {User} = require("../../models");

const verify = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user){
        throw new NotFound();
    }
    await User.findByIdAndUpdate(user._id, {verificationToken: null, verify: true});
    res.json({
        message: "Verfify success"
    });
}

module.exports = verify;