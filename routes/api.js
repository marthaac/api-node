var express = require('express');
const controller = require('../src/controllers/articleController');
const api = express.Router({ mergeParams: true });


/* GET articles. */
api.get('/', function(req, res, next) {
  return controller.getArticles(req, res, next);
});

/* REMOVE article. */
api.delete('/:id', (req, res, next) => {
	return controller.removeArticles(req, res, next);
});

module.exports = api;
