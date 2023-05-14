module.exports = class mvc_model {
    constructor() {
        this.result;
        const { profile, config, validation, orm } = require('../src/loaders.js');
        this.profiler = profile;
        this.Validation = validation;
        this.CONFIG = config;
        this.redis = require('redis');
        this.bcrypt = require('bcryptjs');
        this.Mysql = require('mysql');
        this.connection = this.Mysql.createConnection(this.CONFIG.database);
        this.ORM = orm;
        this.connection.connect(function (err) {
            if (err) throw err;
        });
    }

    query(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, rows, fields) => {
                this.profiler.queries(query, rows);
                if (err)
                    reject(err);
                else
                    resolve(rows);

            });
        });
    }

    async redis() {
        const client = this.redis.createClient();
        client.on('error', err => console.log('Redis Client Error', err));
        await client.connect();
    }

    profiler_enable() {
        console.log('EXECUTED TIME:', this.profiler.time_exec(), 'ms');
        console.log('DATA:', {
            Url: this.profiler.req.url,
            Method: this.profiler.req.method,
            Body: this.profiler.req.body
        }, '\nQUERIES:', {
            Query_String: this.profiler.query_string,
            Results: this.profiler.query_result
        }, '\nSESSION:', {
            ID: this.profiler.req.sessionID,
            Session: this.profiler.req.session
        });
    }
}