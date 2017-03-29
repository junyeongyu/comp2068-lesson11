var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

//use mongoose to connect to mongodb
var mongoose = require('mongoose');
var conn = mongoose.connection;

//link to config file
var config = require('./config/globals');

conn.open(config.db);

// view engine setup
app.set('views', path.join(__dirname, 'client/app/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api', api);

module.exports = app;
