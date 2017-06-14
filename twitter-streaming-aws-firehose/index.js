var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});
var firehose = new AWS.Firehose();
var Twitter = require('twitter');



var client = new Twitter({

    consumer_key :'f9XeB89LtbloOgxJDPsbpaCvz',
    consumer_secret : 'AfWFLLBU8xo1H9B8ympOWED2ahyyytbDnqRjUQgQeYMHYm8NP4',
    access_token_key : '132572127-LxYRbtjNqBXNTIYV8foxQjFLRvRZ46W1S3NbOHZU',
    access_token_secret : 'U3fDIFRHvNo3qqmLxKVSsz4xdzDRfANfPodhb5ze5yj9S',
});



var stream = client.stream('statuses/filter', {track: '#lol'});

stream.on('data', function(event) {

  var params = {
    DeliveryStreamName: 'twitterStream', /* required */
    Record: { /* required */
      Data: new Buffer(event.text) || 'STRING_VALUE' /* required */
    }
  };

   firehose.putRecord(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });

  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});
 
