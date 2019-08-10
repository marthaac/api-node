'use strict';
const request = require('request');
const config = require('../config');
const Article = require('../models/article');

class ArticleService {
	constructor() {
        this.request = request;	
        this.config = config;	
        this.article = Article;
    }

    getArticles(){       
       this.request(this.config.externalURL,  (error, response, body) => {
          
      });      
    }
}
module.exports = new ArticleService(); 