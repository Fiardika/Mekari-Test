const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/health-check', function (req, res) {
    res.sendStatus(200);
});

app.get('/api/hello', function (req, res) {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});
