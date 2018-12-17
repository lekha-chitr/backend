let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
require('dotenv').config()
require('./db')
let indexRouter = require('./routes/index');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
