var express = require("express")
var app = express();

Controllers = require("../controllers/controller")

const path = require("path")  ///

module.exports= function(app){
    app.get("/chats", function(req,res){
        console.log("******** ROUTES INDEX PAGE RUNNING");
        Controllers.chat(req,res);
    })

    app.get("/stats", function(req,res){
        console.log("******** ROUTES INDEX PAGE RUNNING");
        Controllers.stats(req,res);
    })



}
