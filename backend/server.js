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

// alert user of server error
const broadcastServerError = function(client, msg) {
  client.emit('serverError', msg);
}

// server greets client
io.on('connection', (client) => {
  console.log('client connected');
  client.emit('greeting', 'connected');

  client.on('requestGame', () => {
    console.log('client wants to join game');
  });
});