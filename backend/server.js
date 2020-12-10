// load .env data into process.env
require('dotenv').config();

// server config
const PORT = process.env.PORT || 8080;

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').Server(app);
app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(PORT, () => {
  console.log(`server listening on port ${8080}`);
});