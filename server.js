// Dependencies
// Express
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// Handlebars
var exphbs = require("express-handlebars");
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Start server
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});