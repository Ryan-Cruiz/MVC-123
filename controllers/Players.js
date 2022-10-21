/* 
Little Reminder for myself:
You can name anything you want, however it might cause a confusion. 
NAME YOUR CLASS SAME NAME ON FILE LIKE CI 
import the model by using
model_obj = new config.model('model name/.js');
*/
const loader = require('../system/loaders');
const config = loader.config;
const profiler = loader.profile;
const player = new config.model('Player');
module.exports = class Players {
    constructor(){
        this.result = []; // this is to catch the result in database errors
    }
    /* the index page file */
    index(){
       // console.log(res);
        profiler.response.render('index'); // render the index page
        profiler.response.end();
        console.log('this is a index function');
    }
    results(){
        console.log('result');
        player.get_all((result)=>{ // callback this will get all player query
            profiler.response.render('partials/players',{data:result}); // render it on partial
            profiler.response.end();
        });
    }
    /* search function this will get the search queries */
    search(){
        player.search_player(profiler.request.body,(result)=>{ // callback
            profiler.response.render('partials/players',{data: result}); // render it on partial
            profiler.response.end();
            console.log('this is a search function');
        });
    }
}

