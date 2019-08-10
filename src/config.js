const config = {
    db: {
		name: 'articles',
		connectionStr: 'mongodb://127.0.0.1/'		
	},
	externalURL: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
}

module.exports = config; 