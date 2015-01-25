"use strict";
var $ = require('jquery');

module.exports = function () {
    console.log("Basic " + btoa("SitUpAdmin:admin"));
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://situp.cloudapp.net:9081/resources/event',
        username: 'SitUpAdmin',
        password: 'admin',
        xhrFields: {
            withCredentials: true
        },
        success: function (a, b, c) {
            console.log("sucess");
            console.log(a);
            console.log(b);
            console.log(c);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(JSON.stringify(jqXHR));
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
};
//
//headers: {
//    "Authorization": "Basic " + btoa("SitUpAdmin:admin")
//},
//
//username: 'SitUpAdmin',
//    password: 'admin',


//http://situp.cloudapp.net:9081/resources/event