'use strict';
const articleService = require('../services/articleService');
const HttpStatus = require('http-status-codes');

class ArticleController {
    constructor() {
        this.service = articleService;
    }

    async getArticles(req, res, next) {
        try {
            const response = await this.service.getArticles();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
      
    }

    async removeArticles(req, res, next) {
        const id = req.params.id;
        try {
            await this.service.removeArticle(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ArticleController(); 