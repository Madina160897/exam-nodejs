const express = require("express");
const cors = require("cors");
const bodYPaser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodYPaser.json()); 
app.use(bodYPaser.urlencoded({extended: false})); 
 
app.use("/static", express.static(__dirname + '/public'));


app.listen(8080)