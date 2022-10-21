/* will get the routes from the routes.js(this module will here temporarily)*/

class parent_route{
    routing(filepath){
        const new_Controller = require(filepath);
       return new_Controller;
    }
}
module.exports = {
    
    port : 8080,

    routes: class extends parent_route{
        constructor(filepath){
           let x = super().routing(filepath);
           return new x();
        }
    },
    database: 
        { 
            "host": "localhost",
            "user": "root",
            "password": "root",
            "database": "sample",
            "port": 3308
        },
    session: 
        {
            secret: 'keyboardkitteh',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 60000 }
        },
    route_path: class{
            constructor(){
                this.get = {};
                this.post = {};
            }
            execute_path(){
                const Express = require("express");
                const Router = Express.Router();
                let get = Object.keys(this.get);
                let post = Object.keys(this.post);
                for(let i=0;i<get.length;i++){
                   // console.log('get',this.get[get[i]]);
                    Router.get(get[i],this.get[get[i]]);
                }
                for(let i=0;i<post.length;i++){
                    //console.log('post',post[i],this.post[post[i]]);
                    Router.post(post[i],this.post[post[i]]);
                }
                return Router;
            }

        },
    model : class extends parent_route{
        constructor(filepath){
            let x = super().routing('../models/'+filepath);
            return new x();
        }
    },
    controller : class extends parent_route{
        constructor(filepath){
           let x =  super().routing('../controllers/'+filepath);
           return new x();
        }
    }
}
