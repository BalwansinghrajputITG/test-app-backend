const mongoConnect = require("./db/db");
const express = require("express");
const app = express();

mongoConnect();

module.exports = app;
