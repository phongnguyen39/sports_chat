// MODULE REQUIREMENTS //////////////////////////////////////
const express = require('express');
const app = express();


// SOCKET LISTENING PORT //////////////////////////////////////
// const server = app.listen(3000);
// const io = require('socket.io')(server);
// var counter = 0;

// FILEPATHS //////////////////////////////////////
// app.use(express.static(__dirname + "/public"));
app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(express.static(path.join(__dirname, "./static")));
// app.set("views", path.join(__dirname, "./views"));
// app.set("view engine", "ejs");

// // WEB SOCKET CONNECTION ////////////////////////////////////// 
// io.on('connection', function (socket) { //2
  
//   socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
//   socket.on('thankyou', function (data) { //7
//     counter+=1;
//     console.log(counter)  
//     console.log(data.msg); //8 (note: this log will be on your server's terminal)
//     // res.json("HELLO FROM THE SERVER")
//   });
    
// });

// JSON BODY PARSER //////////////////////////////////////
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
var path = require("path");

// WEBPAGE FAIL SAFE //////////////////////////////////////
// app.all("*", (req,res,next) => {
//   res.sendFile(path.resolve("./public/dist/public/index.html"))
// })

require('./server/config/routes.js')(app)


// NORMAL LISTENING PORT //////////////////////////////////////
app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});