module.exports = class mvc_model{
    constructor(){
        this.result;
        const loader = require('./loaders');
        this.profiler = loader.profile;
        this.Validation = loader.validation;
        this.CONFIG  = loader.config;
        this.bcrypt = require('bcryptjs');
        this.Mysql = require('mysql');
        this.connection = this.Mysql.createConnection(this.CONFIG.database);

        this.connection.connect(function(err){
            if (err) throw err;
        });
    }
    query(query){
       return new Promise((resolve,reject)=>{
            this.connection.query(query, (err, rows, fields) => {
                this.profiler.queries(query,rows);
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
             
            }); 
       }); 
    }
    profiler_enable(){
        console.log('EXECUTED TIME:',this.profiler.time_exec(),'ms');
        console.log('DATA:',{
            Url: this.profiler.request.url,
            Method: this.profiler.request.method,
            Body: this.profiler.request.body
        },'\nQUERIES:',{
            Query_String: this.profiler.query_string,
            Results: this.profiler.query_result
        },'\nSESSION:',{
            ID: this.profiler.request.sessionID,
            Session :this.profiler.request.session});
    }
}