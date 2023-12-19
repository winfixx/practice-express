const express = require("express");
const path = require("path");
const serverRoutes = require("./route/server.route.js");
// const middlewares = require("./middlewares");

const PORT = process.env.PORT || 5000;
const app = express();

app.set("views engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));

// app.use(express.static(path.resolve(__dirname, "static")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(serverRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Main", active: "main" });
});

app.get("/features", (req, res) => {
  res.render("features.ejs", { title: "Features", active: "features" });
});


// app.use(middlewares.requestTime)
// app.use(middlewares.logger)

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/app', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'app.html'))
// })

// app.get('/download', (req, res) => {
//     console.log(middlewares.requestTime)
//     res.download(path.resolve(__dirname, 'static', 'app.html'))
// })

app.listen(PORT, () => console.log("Server has been  started.."));
