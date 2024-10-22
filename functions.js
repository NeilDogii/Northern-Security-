const fs = require("fs-extra");

module.exports = (Client) => { 

    fs.readdir("./src/handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(`Loading ${jsfiles.length} events...`);
        jsfiles.forEach((f, i) => {
            require(`./src/handlers/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
        });
    });
    
    fs.readdir("./src/mongodb/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("MongoDB files not found");
        console.log(`Loading ${jsfiles.length} MongoDB files...`);
        jsfiles.forEach((f, i) => {
            require(`./src/mongodb/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
        });
    });
  
}