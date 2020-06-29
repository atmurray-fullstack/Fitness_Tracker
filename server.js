const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

const path = require("path");
// app.get("/:string", (req, res) => {
//     req.params.string === "exercise" ? res.sendFile(path.join(__dirname, "/public/exercise.html")) : res.sendFile(path.join(__dirname, "/public/index.html"))
// })