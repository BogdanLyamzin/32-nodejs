const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Bogdan:pBje6ZbFRATcsTq@cluster0.lql0g.mongodb.net/online_shop?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(()=> {
        console.log("Database connect success")
    })
    .catch(error => console.log(error.message))