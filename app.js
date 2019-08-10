var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const DBConnection = require('./src/mdb.js');
const articleService = require('./src/services/articleService.js');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
DBConnection.connect().catch(err => console.log(err)).then(()=> articleService.callSaveArticlesEveryHour());

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
