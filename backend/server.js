// load .env data into process.env
require('dotenv').config();

// server config
const PORT = process.env.PORT || 8080;

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: true }));

// start server listening
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// server greets client
io.on('connection', (client) => {
  client.emit('greeting', 'connected');
});