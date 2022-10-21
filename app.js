/*
Things to remember before the doing spaghetti coding 
1. start the server here
2. make something that will call the routes.js
3. config.js file will handle all codes from the routes.js(temp)
4. routes will call the specific view file (if called)
5. for database coming soon... (or might copy the one in debugger task)
6. database and session is added in the config
7. route_path added
8. make a validation may looks like this
    ('name_of_input','message_that will throw e.g First Name',array of condition)(old)
    ('message', input, array of rules)(updated)
9. make a enable profiler 
    -> profiler is in the model side wherein it only logs in console of server
    -> to access profiler go to the model and extends the mvc_model
    -> write it after the query is fired or else you might not able to catch the queries
10.
*/
const lib = require('./system/loaders.js');
const config = lib.config;
const Express = require("express");
const path = require("path");
const app = Express();
const bodyParser = require('body-parser');
const profiler = lib.profile;
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(Express.static(path.join(__dirname, "./assets")));

app.set('views', path.join(__dirname, './views'));

app.use(session(config.session));

app.set('view engine', 'ejs');

const routes  = require('./system/routes.js');

app.use((req, res, next) => {
    profiler.time =  Date.now(); // take the current time of execution
    profiler.request = req; // take the request
    profiler.response = res; // take the response
    /* deliver all this on profiler.js and fetch it on mvc_model and logs it there when
        profiler is called in specific method
    */
    next();
});
app.use(routes);

app.listen(config.port, function(){
    console.log("listening on port "+config.port);
});
