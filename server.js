const express = require("express");
const path = require("path");
const pjson = require('./package.json');

const APP_PORT = process.env.PORT || 8080;
const DIST_DIR = `/dist/${pjson.name}`;

const app = express();
app.use(express.static(path.join(".", DIST_DIR)));
app.get("/*", (req, res) => res.sendFile("index.html", { root: DIST_DIR }));
app.listen(APP_PORT);
console.log(`Running on port ${APP_PORT}`);
