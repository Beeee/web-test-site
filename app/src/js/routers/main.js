"use strict";
var page = require('page');
var $ = require('jquery');
var api = require('./../datasource/api');
var activity = require('./../templates/activity');



function notfound(ctx) {
    console.log();
    $(".app").html("Hello World" + ctx.params.id);
}

function index() {
    api(function (a) {
        activity.render(a);
    });

}

module.exports = function () {
    page('/', index);
    page('/:id', notfound);
    page();
}



