'use strict';

const mongoose = require('mongoose');
const config = require('./config');
const connectionStr = config.db.connectionStr;
const database = config.db.name;

class DBConnection {
    static connect() {
        if ( this.db ) return Promise.resolve(this.db)
        return mongoose.connect(connectionStr, {
			useNewUrlParser: true,
			dbName: database
		}).then(db => {
            this.db = db;
            console.log('database connected!');
        }).catch(err => {
            console.log(`connection error: ${err}`);
        });
    }
}
DBConnection.db = null
module.exports = DBConnection;
