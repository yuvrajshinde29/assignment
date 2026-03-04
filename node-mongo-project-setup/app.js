const express = require('express');
const router = require('./src/routes');
const errorHandler = require('./src/middlewares/errorHandler');
const app = express();

app.use('/api', router);
app.use(errorHandler)

module.exports= app;