var sheetrock = require('sheetrock');
var _ = require('lodash');
var Twit = require('twit')


var T = new Twit({

    consumer_key :'f9XeB89LtbloOgxJDPsbpaCvz',
    consumer_secret : 'AfWFLLBU8xo1H9B8ympOWED2ahyyytbDnqRjUQgQeYMHYm8NP4',
    access_token_key : '132572127-LxYRbtjNqBXNTIYV8foxQjFLRvRZ46W1S3NbOHZU',
    access_token_secret : 'U3fDIFRHvNo3qqmLxKVSsz4xdzDRfANfPodhb5ze5yj9S',

});


var client = new Twitter({
});

var myCallback = function (error, options, response) {
    if (!error) {

        response.rows.forEach(function (p1, p2, p3) {
            if(p1.cellsArray){
                //var x =_.filter(p1.cellsArray,function(o) { return o; })
                console.log(p1.cellsArray);
                p1.cellsArray.forEach(function (item,index) {
                    if(index>1){

                        var screenName = item[0];

                    }
                });
            }

        });
        /*
         Parse response.data, loop through response.rows, or do something with
         response.html.
         */
    }
};

sheetrock({
    url: "https://docs.google.com/spreadsheets/d/134BBsj9gFKYv8strppLG1_Ttox1v_FGLNO0NsRdXJ6Q#gid=907447002",
    query: "select *",
    callback: myCallback
});


/**
 * Created by tomasztkaczyk on 14.06.17.
 */
