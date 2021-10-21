// const fs = require("fs").promises;
const fs = require("fs/promises");

const fileOperation = async(filePath, action, data) => {
    switch(action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
        default: 
            throw new Error("Unknown action");
    }
};

const filePath = "files/file.txt";

// fileOperation(filePath, "read");
// fileOperation(filePath, "add", "\nНам ярость!");
fileOperation(filePath, "replace", "Пламя и кровь!");



