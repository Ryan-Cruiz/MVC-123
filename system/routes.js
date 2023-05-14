const { route_path, controller } = require('./core.js');
const UserController = controller('Players');
const $ = route_path;

/* $.post is for the forms  if you want to get the data */
$.get['/'] = UserController.index; // index function
$.get['/testApi/:id'] = UserController.destroy;
$.get['/cars'] = UserController.getCars;
module.exports = $.execute_path();

