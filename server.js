const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`Fitness_Tracker running on port ${PORT}!`);
});
