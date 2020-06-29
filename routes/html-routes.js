module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile("../routes/html-routes.js")
    })
}