const express = require("express");
constpath = require("path");
const app = express();

app.use(express.static('public'));
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});