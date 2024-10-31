const express = require("express");

const app = express();

const candySold = [
    "Twizzlers",
    "Twizzlers",
    "Kit-Kat",
    "Chocolate",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
    "HoneyBun",
];

app.get("/api/candysold", function(req, res) {
    res.status(200).json({ candySold: candySold });
})

const port = process.env.PORT || 4087;
app.listen(port);

module.exports = app;

console.log(`http://localhost:${port}`);
