const jwt = require("jsonwebtoken");

const SECRET_KEY = "NFDGHShdsdffg";

const payload = {
    _id: "618ac74c64380410eb4435ef"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

const result = jwt.verify(token, SECRET_KEY);
// console.log(result);

try {
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThhYzc0YzY0MzgwNDEwZWI0NDM1ZWYiLCJpYXQiOjE2MzY0ODY1NTEsImV4cCI6MTYzNjQ5MDE1MX0.y28lePQ2H5QJtXtLR6SCDJd8inaUTAIX-CyK7KgqXq3"
    const result2 = jwt.verify(wrongToken, SECRET_KEY);
    console.log(result2);
} catch (error) {
    console.log(error.message);
}




