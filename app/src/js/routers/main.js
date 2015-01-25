"use strict";
var page = require('page');
var $ = require('jquery');
var api = require('./../datasource/api');


function notfound(ctx) {
    console.log();
    $(".app").html("Hello World" + ctx.params.id);
}

function index() {
    api();
    console.log("test not index");
    $(".app").html("Index found");
}

module.exports = function () {
    page('/', index);
    page('/:id', notfound);
    page();
}



