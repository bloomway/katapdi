const express = require("express");
const path = require("path");

const dist_dir = "/dist/imdb";

const app = express();
app.use(express.static(path.join(__dirname, dist_dir)));
app.get("/*", (req, res) => res.sendFile("index.html", { root: dist_dir }));
app.listen(process.env.PORT || 8080);
