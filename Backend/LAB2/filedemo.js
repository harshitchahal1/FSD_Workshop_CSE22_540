import fs from "node:fs/promises";

const filePath = "userdata.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully!");
    } catch (err) {
        console.error("Error creating file", err);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log("File Content:\n", data);
        return data;
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("File does not exist yet.");
        } else {
            console.error("Error reading file", err);
        }
    }
}

async function appendFile(content) {
    try {
        await fs.appendFile(filePath, content, "utf8");
        console.log("Content appended successfully!");
    } catch (err) {
        console.error("Error appending to file", err);
    }
}

async function runDemo() {
   
    await createFile("Hello file concept\n");

  
    await readFile();

    await appendFile("This is appended content.\n");

   
    await readFile();
}

runDemo();