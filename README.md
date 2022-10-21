# MVC_123
## Folder Structure
- Controller
-- This where all the controllers go
- Model
-- All of the Logics and query
- Views
-- All of the HTML/EJS going here
- Assets
-- All of the img,css will go here
- System
-- All core structure that made this framework run

## Features

- Routing System
- Profiler - Only runs on the server side console.log()
   Content of profiler:
-- DATA(url,method, and fetched data)
-- QUERIES(query statement, and query result)
-- SESSION
- Validation - Has eight different rules so far
-- required - will check if the field is not empty
-- min_length e.g min_length[8]
-- max_length e.g max_length[8]
-- email - will look up the string if it's valid email
-- confirm e.g confirm[password] - will check if it's the same as password
-- is_numeric - will check the field if inputted is only a number
-- is_char - will check the field if inputted is only a characters

## Instructions to run
Making a simple webpage using the framework

-- Make an `index.ejs` file in views 
```
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome </title>
    </head>
    <body>
        <h1> Welcome to the framework!! </h1>
    </body>
</html>
```
--  Make a controller file and name it `Welcome.js` and require config
-- Create a class (you can name it (optional))
-- Make an `index` function
```
const config = require('../system/config');
module.exports = class Welcome{
    index(req,res){
        res.render('index'); // make an index.ejs in the view folder
        res.end(); // end the response
    }
}
```
On the `routes.js`
```
// require the config
const CONFIG = require('../system/config'); 
// take the route_path to use it on routing
const $ = new CONFIG.route_path(); 
// require the controller
const Welcome = new CONFIG.controller('Welcome');

$.get['/'] = Welcome.index; // get the index function in Welcome.js
// $.post for post method

module.exports = $.execute_path(); // execute all routes
```
Here you have it, you made a simple website using the framework! 🎉🥳

### Connecting it on Database
On `config.js` 
```
database:
{
    "host": "localhost",
    "user": "your_database_user_here",
    "password": "your_database_password_here",
    "database": "your_database_schema_here",
    "port": port number
}
```
Make a file in the model folder for this example let's name it `Sample.js`
```
// take the library
const libraries = require('.../system/libraries'); 
// in the library require the model
const model = libraries.model;
// create a class and extend the mvc_model
module.exports = class Sample extends mvc_model{
 // code goes here
}
```
Lets say we are going to get all the cars stored in database
```
// inside the class
    async get_all(callback){
        let query = "SELECT * FROM cars"; // query statement
        // let's now call the query function from mvc_model
        /* doing some magic, you can look this up on mvc_model.js it's pretty simple */ 
        let result = await super.query(query); 
        return callback(result); // return it on for controller to take
    }
```
Go to the `Welcome.js` in controller and require the `Sample.js`
```
const config = require('../system/config');
const Sample = config.model('Sample'); // require the Sample.js
```
Let's modify what's inside the `index` function
```
index(req,res){
    Sample.get_all((result) => { // take the callback
        // make an index.ejs in the view folder
        res.render('index',result); // render the result in index.ejs
        res.end(); // end the response
    });
}
```
## All modules
-- In case the framework don't have modules, you can look up to this and install the following.
- [Bycryptjs](https://www.npmjs.com/package/bcryptjs)
```sh
npm install bcryptjs 
```
- [Body-parser](https://www.npmjs.com/package/body-parser)
```sh
npm install body-parser
```
- [Ejs](https://www.npmjs.com/package/ejs)
```sh
npm install ejs
```
- [Express](https://www.npmjs.com/package/express)
```sh
npm install express
```
- [Express-session](https://www.npmjs.com/package/express-session)
```sh
npm install express-session
```
- [Mysql](https://www.npmjs.com/package/mysql)
```sh
npm install mysql
```
