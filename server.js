const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3075;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
});






app.listen(PORT, function() {
    console.log("This app is listening on PORT " + PORT);
});