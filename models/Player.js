const loader = require('../system/loaders');
const mvc_model = loader.model;
module.exports = class Player extends mvc_model{
    /* get all players */
    async get_all(callback) {
        // this.profiler_enable();
        let query = this.Mysql.format(`SELECT sport_players.id as id,name,gender,img,sport_name FROM sports_played 
        INNER JOIN sport_players ON sport_players.id = sports_played.player_id
        INNER JOIN sports ON sports.id = sports_played.sport_id`);
        let result = await super.query(query);
        return callback(result);
    }
    /* search specific players */
   async search_player(form_input,callback){
        // this.profiler_enable();
        let query = this.Mysql.format(`SELECT sport_players.id as id,name,gender,img,sport_name FROM sports_played 
        INNER JOIN sport_players ON sport_players.id = sports_played.player_id
        INNER JOIN sports ON sports.id = sports_played.sport_id WHERE name = ? OR gender IN (?) OR sports.id IN (?)`,
            [form_input.player_name,form_input.genders,form_input.sports]);
        let result = await super.query(query);
        return callback(result);
   }
}