const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Новая заявка с сайта",
    text: "<p>С сайта пришла новая заявка</p>"
}

transporter.sendMail(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message))