const path = require("path")

module.exports = (app) => {
    console.log("=".repeat(25) + "html-routes")

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"));
    });

    app.get("/:string", (req, res) => {
        if (req.params.string === "exercise") {
            res.sendFile(path.join(__dirname, "../public/exercise.html"))
        } else if (req.params.string === "stats") {
            res.sendFile(path.join(__dirname, "../public/stats.html"))
        } else {
            res.sendFile(path.join(__dirname, "../public/index.html"));

        }
    })
}