var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});
var firehose = new AWS.Firehose();
var Twitter = require('ntwitter');
var importer = require("./listImporter.js");
var mongo = require('mongodb');


var t = new Twitter({

    consumer_key :'f9XeB89LtbloOgxJDPsbpaCvz',
    consumer_secret : 'AfWFLLBU8xo1H9B8ympOWED2ahyyytbDnqRjUQgQeYMHYm8NP4',
    access_token_key : '132572127-LxYRbtjNqBXNTIYV8foxQjFLRvRZ46W1S3NbOHZU',
    access_token_secret : 'U3fDIFRHvNo3qqmLxKVSsz4xdzDRfANfPodhb5ze5yj9S',
});


importer.getPolitiker(politiker=>{
    importer.getHashtags(hashtags => {
        var Server = mongo.Server,
        Db = mongo.Db, assert = require('assert');
        BSON = mongo.BSONPure;

        var server = new Server('mongodb://ubuntu:fakenewsgraph321@165.227.143.222', 27017, {auto_reconnect: true});
        db = new Db('stream', server);
// open db
        db.open(function(err, db) {
            assert.equal(null, err);

            t.stream(
                'statuses/filter',
                { track: hashtags, follow:politiker },
                function(stream) {
                    stream.on('data', function(tweet) {
                        db.collection('streem', function(err, collection) {
                            collection.insert( tweet,{ safe:true }, function(err, result) {
                                    console.log("saved tweet",result);
                                });
                            });
                        });
                    });
                }
            );
        });

});




