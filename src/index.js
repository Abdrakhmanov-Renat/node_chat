'use strict';

const { WebSocketServer } = require('ws');
const { createServer } = require('./createServer');

const PORT = 5700;

const server = createServer().listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running on localhost:${PORT}`);
});
