const express = require('express');
const server = express();
const workRouter = require('./work/work-router.js');
server.use(express.json());
server.use('/api/work', workRouter);
module.exports = server;