"use strict";
var $ = require('jquery');

module.exports = function (success, error) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://situp.cloudapp.net:8080/resources/event',
        username: 'SitUpAdmin',
        password: 'admin',
        xhrFields: {
            withCredentials: true
        },
        success: function (a, b, c) {
            success(a, b, c);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(JSON.stringify(jqXHR));
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
};