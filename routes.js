const express = require("express");
const routes = express.Router();


app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*",
    });
 
    return res.json('hello world');
});

module.exports = routes;
