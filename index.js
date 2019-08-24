// TODO: Create a script file which downloads a page at a given URL and writes page's HTML to a file. URL must be provided from the command-line argument.

// const uuid = require("uuid/v1");
const url = process.argv[2];
const https = require("https");
const fs = require("fs");
const path = require("path");

https.get(url, response => {
    let code = "";
    response.on("data", chunk => code += chunk);
    response.on("end", () => fs.writeFileSync(path.join(__dirname, "source-code.txt"), code, "utf-8"));
}).on("error", (err) => console.error(err.message));
