'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	story_title: mongoose.Schema.Types.String,
	title: mongoose.Schema.Types.String,
	author: mongoose.Schema.Types.String,
	created_at: mongoose.Schema.Types.Date,
	story_url: mongoose.Schema.Types.String,
	url: mongoose.Schema.Types.String,
	deleted: mongoose.Schema.Types.Boolean,
	objectID: mongoose.Schema.Types.String
});

module.exports = {
	model: mongoose.model('Articles', schema),
	schema: schema
};