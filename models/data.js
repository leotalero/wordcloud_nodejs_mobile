var db = require('../db');
var collection='data';
var assert = require('assert');
var mongo = require('mongodb');


exports.insert = function(staffNumber,words, callback){
    var dashCollection = db.get().collection(collection);
    
     var insertObject={
        _id:staffNumber,
        hobbies:words
    };
    console.log('_id:'+insertObject._id+' hobbies:'+insertObject.hobbies);
    dashCollection.insert(insertObject, callback);
};



exports.get_hobbies = function(filter, callback){
     var dashCollection = db.get().collection(collection);
    dashCollection.aggregate(
         [{ $unwind : "$hobbies" } ,
           { $group : {_id : "$hobbies",count: { $sum: 1 }}}
           ]
   ).toArray(callback);      
    
   /* dashCollection.find({_id: '37135'}, function(err, cursor){
     cursor.toArray(callback);
   
        });*/
        
   
};

 exports.get_staff = function(filter, callback){
        
         var dashCollection = db.get().collection('categorias');
             var new_id={
                "_id":filter
                   };
        console.log('get_staff'+'_id: '+new_id._id);
        
       /*dashCollection.findOne({'_id':filter}, function(err, cursor){
            cursor(callback);
            
        });*/
        //dashCollection.find({_id: filter}, function(err, cursor){
        var filter_nmr=Number(filter);
        dashCollection.find({'_id':filter_nmr}, function(err, cursor){
        
        cursor.toArray(callback);
        });
 } ;
 
 exports.insert_words_ = function(staffNumber,words,categoria,porque,callback){
    console.log("insert_words"+staffNumber+","+words+","+categoria);
    var dashCollection = db.get().collection('words');
    
     var insertObject={
        _id:staffNumber, 
        categoria:categoria,
        words:words,
        porque:porque
        
    };
    console.log('_id:'+insertObject._id+' categoria:'+insertObject.categoria+' words:'+words+' porque:'+porque);
    dashCollection.insert(insertObject, callback);
};




exports.get_words = function(Objeto, callback){
     var dashCollection = db.get().collection('words');
    dashCollection.aggregate( [ { $match : { categoria :Objeto.categoria } }  ,  { $unwind : "$words" } , { $group : { _id : { categoria:"$categoria",words:"$words" } ,count: { $sum: 1 }}}  ]   ).toArray(callback);      
    
   /* dashCollection.find({_id: '37135'}, function(err, cursor){
     cursor.toArray(callback);
   
        });*/
        
   
};

exports.get_all_words = function(Objeto, callback){
     var dashCollection = db.get().collection('words');
    dashCollection.aggregate( [   { $unwind : "$words" } , { $group : { _id : { categoria:"$categoria",words:"$words" } ,count: { $sum: 1 }}}  ]     ).toArray(callback);      
    
   /* dashCollection.find({_id: '37135'}, function(err, cursor){
     cursor.toArray(callback);
   
        });*/
        
   
};


exports.get_all_words_result = function(Objeto, callback){
     var dashCollection = db.get().collection('words');
    dashCollection.find().toArray(callback);      
    
   /* dashCollection.find({_id: '37135'}, function(err, cursor){
     cursor.toArray(callback);
   
        });*/
        
   
};