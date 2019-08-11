var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const DBConnection = require('./src/mdb.js');
const articleService = require('./src/services/articleService.js');
const cors = require('cors');

var indexRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
DBConnection.connect().catch(err => console.log(err)).then(()=> articleService.callSaveArticlesEveryHour());
app.use(cors());

app.use('/articles', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
