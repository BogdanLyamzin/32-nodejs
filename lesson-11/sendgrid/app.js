const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "bicom30170@keagenan.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новая заявка с сайта",
    html: "<p>С сайта пришла новая заявка</p>"
};

sgMail.send(mail)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message));