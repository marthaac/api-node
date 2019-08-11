'use strict';
const request = require('request');
const config = require('../config');
const Article = require('../models/article');

class ArticleService {
	constructor() {
        this.request = request;	
        this.config = config;	
        this.model = Article.model;
    }

   async getArticles(){
        try {
            const elements = await this.model.find({ "deleted": { "$in": [false] } }).sort({'created_at': -1}).lean().exec();
            const response = {
                'count': elements.length,
                'list': elements
            };
            return response;            
        } catch (error) {
            return {
                'count': 0,
                'list': []
            };
        }
    }

	async removeArticle(id) {
       try {
        const filter = { objectID: id };
        const update = { deleted: true };            
        await this.model.findOneAndUpdate(filter, update).exec();
       } catch (error) {
           throw error;
       }
	}

    saveArticles(){       
       const url =  this.config.externalURL;
       this.request(url, async (error, response, body) => {
          if (response.statusCode == 200){
            const data = JSON.parse(body);
            if (data.hits.length > 0) {
                let bulkOps = [];
                data.hits.map((element)=> {
                    const article = {
                        story_title: element.story_title,
                        title: element.title,
                        author: element.author,
                        created_at: new Date(element.created_at),
                        story_url: element.story_url,
                        url: element.url,
                        deleted: false,
                        objectID: element.objectID
                    };
                    let upsertArt = {
                        'updateOne': {
                          'filter': {'objectID': article.objectID },
                          'update': article,
                          'upsert': true
                        }};
                      bulkOps.push(upsertArt);
                });

                try {
                    await this.model.collection.bulkWrite(bulkOps); 
                    console.log('BULK update OK'); 
                } catch (error) {
                    console.log('BULK update error');
                }
            }          
          }
       });      
    }

    callSaveArticlesEveryHour(){        
            // setInterval(this.getArticles, 1000 * 60 * 60);       
            setInterval(() => this.saveArticles(), 1000 * 3);       
    }
}
module.exports = new ArticleService(); 