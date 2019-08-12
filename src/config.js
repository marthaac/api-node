const host = process.env['MONGODB_HOST'] || '127.0.0.1';
const port = process.env['MONGODB_PORT'] || '27017';

const config = {
    db: {
		name: 'articles',
		connectionStr: `mongodb://${host}:${port}`		
	},
	externalURL: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
}

module.exports = config; 