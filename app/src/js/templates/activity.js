"use strict";
var $p = require('pure').$p;

exports.render = function (data) {
    console.log(JSON.stringify(data));
    var directive = {
        'li': {
            'a<-': {
                'span': 'a.type'
            }
        }
    };
    $p('ul').render(data, directive);
};

exports.unrender = function () {
    $p('ul').html();
};