const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set('trust proxy', true)

app.get("/", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("IP: " + req.ip);
});

app.get('/api/health-check', function (req, res) {
    res.sendStatus(200);
});

app.get('/api/hello', function (req, res) {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});
