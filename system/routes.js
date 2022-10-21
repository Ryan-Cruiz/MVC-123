const CONFIG  = require('../system/config.js');
const UserController = new CONFIG.controller('Players');
const $ = new CONFIG.route_path();

/* $.post is for the forms  if you want to get the data */
$.get['/'] = UserController.index; // index function
$.get['/result'] = UserController.results;
$.post['/search'] = UserController.search; // search function

module.exports = $.execute_path();

