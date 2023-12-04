const core = require('./core.js');
const route_path = core.route_path;
const controller = core.controller;
const UserController = controller('Players');
const $ = route_path;
const middleware = require('./middleware.js');

middleware.routeRole = {
    "admin": ['/cars'],
    "guest": ['/'],
    "auth": ['/insertCar'],
    "mod": ['/testapi/:id']
}
/* $.post is for the forms  if you want to get the data */
$.get['/'] = UserController.index; // index function
$.get['/testapi/:id'] = UserController.destroy;
$.get['/cars'] = UserController.getCars;
$.post['/insertCar'] = UserController.insertCar;
$.get['/wowie'] = UserController.wowie;
module.exports = $.execute_path();
middleware.routes = $.routes;

