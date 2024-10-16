// Pull In Modules Needed 
const path = require("path");
const express = require("express");

const app = express();

app.use(
    express.static(
    path.join(__dirname, "views") //
    )
);

const port = process.env.PORT || 4087;
app.listen(port);



console.log(`http://localhost:${port}`);

