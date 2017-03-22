//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var db=require("./db");
var data=require("./models/data");

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));


/*
var messages = [];
var sockets = [];

io.on('connection', function (socket) {
    
    
    socket.on()

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

*/


io.on("connection", function(socket){
    // new client
    
    socket.on("inserthobbies", function(reqObj){
      
      data.insert(reqObj.staffNumber, reqObj.words, function(err, result){
        if(err){
          socket.emit("error", "Error.");
          
          return;
        }
        
        socket.emit("resultInsert", "Datos correctos! " + reqObj.staffNumber);
      });
      
     
    });
    
     socket.on("insertwords", function(reqObj){
      
      data.insert_words_(reqObj.staffNumber, reqObj.words,reqObj.categoria,reqObj.porque, function(err, result){
        if(err){
          socket.emit("error", "Error interno");
          
          return;
        }
        
        socket.emit("resultInsert", "Datos correctos! " + reqObj.staffNumber);
      });
      
     
    });
    
    
     socket.on("getwordshobbies", function(){
        data.get_hobbies('hobbies', function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
        console.log(result);
        socket.emit("resultwordshobbies",JSON.stringify(result));
      });
      
      
    });
    
     socket.on("getwordscategoria_result", function(categoria){
       if (categoria.categoria=='All'){
             data.get_all_words_result(categoria, function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
       // console.log(result);
        socket.emit("resultwords_all",JSON.stringify(result));
      });
       }else{
           data.get_words(categoria, function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
       // console.log(result);
        socket.emit("resultwords",JSON.stringify(result));
      });  
       }
    
      
      
    });
    
       socket.on("getwordscategoria", function(categoria){
       if (categoria.categoria=='All'){
             data.get_all_words(categoria, function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
       // console.log(result);
        socket.emit("resultwords_all",JSON.stringify(result));
      });
       }else{
           data.get_words(categoria, function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
       // console.log(result);
        socket.emit("resultwords",JSON.stringify(result));
      });  
       }
    
      
      
    });
    
    socket.on("bucar_staff", function(reqObj){
      console.log('buscar_staff');
        data.get_staff(reqObj.staff, function(err, result){
        if(err){
          socket.emit("error", "Error interno.");
          
          return;
        }
      //  console.log(result);
       socket.emit("change_page",result);
      });
    });
    
    
    
});



db.connect('mongodb://localhost:27017/townhall', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo');
        process.exit(1);
    }
  
  
  /*data.insert(3713242,["football","dance","salsa","voleyball","softball"], function(err,result){
    if(err){
        
    return;
    }
    console.log('resut done!',result);
  });*/

    server.listen(process.env.PORT || 30004, process.env.IP || "0.0.0.0", function(){
      var addr = server.address();
         console.log("Chat server listening at", addr.address + ":" + addr.port);
    });
}); 
