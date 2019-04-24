var express = require("express")
var app = express();

// var Movie = require("../models/movie").Movie

module.exports = {
    chat: function (req, res) {
        console.log("******** CONTROLLER INDEX PAGE RUNNING")
        res.render("index")
    },

    stats: function (req, res) {
        console.log("******** CONTROLLER INDEX PAGE RUNNING")
        res.render("stats")
    }
}
