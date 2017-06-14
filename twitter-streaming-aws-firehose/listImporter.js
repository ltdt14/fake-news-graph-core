var sheetrock = require('sheetrock');
var _ = require('lodash');
var Twit = require('twit')

var sheets = {hashtags: "https://docs.google.com/spreadsheets/d/134BBsj9gFKYv8strppLG1_Ttox1v_FGLNO0NsRdXJ6Q/edit#gid=762605217",
              politiker: "https://docs.google.com/spreadsheets/d/134BBsj9gFKYv8strppLG1_Ttox1v_FGLNO0NsRdXJ6Q/edit#gid=907447002"}

var T = new Twit({

    consumer_key :'f9XeB89LtbloOgxJDPsbpaCvz',
    consumer_secret : 'AfWFLLBU8xo1H9B8ympOWED2ahyyytbDnqRjUQgQeYMHYm8NP4',
    access_token : '132572127-LxYRbtjNqBXNTIYV8foxQjFLRvRZ46W1S3NbOHZU',
    access_token_secret : 'U3fDIFRHvNo3qqmLxKVSsz4xdzDRfANfPodhb5ze5yj9S',

});

var myCallback = function (error, options, response) {
    var itemType;
    var list = "";
    if (!error) {
        response.rows.forEach(function (p1, p2, p3) {

            if(p2 == 0) {
                itemType = p1.cellsArray[0];
            };

            var item = p1.cellsArray[0];

            if(itemType == "Hashtag") {
                item = "#"+item+',';
            };

            list += item;


        });

    }

    callback(list);

};


module.exports.getHashtags = function(callback){

  sheetrock({
        url: sheets.hashtags,
        query: "select A,B",
        callback: function(error, options, response){
            list = '';
            response.rows.forEach(function (p1, p2, p3) {

                if(p2 == 0) {
                    itemType = p1.cellsArray[0];
                };

                var item = p1.cellsArray[0];

                if(p2 >0 ){
                    
                    item = "#"+item+',';
                    list += item;
                }

            });

            callback(list);
        },

    });


};

module.exports.getPolitiker = function(callback){

    sheetrock({
        url: sheets.politiker,
        query: "select A,B",
        callback: function(error, options, response){
            list = '';
            arr = [];
            var ctn = response.row.length;
            response.rows.forEach(function (val, index) {
                if(index == 0) {
                    itemType = val.cellsArray[0];
                };

                var item = val.cellsArray[0];


                if(index >0){
                    list += item+',';
                    arr.push(item);
                };


            });

            list.slice(0,list.length-1);
            if(ctn>100){
                var tmp =  _.take(arr, 100);
                list = _.drop(arr, 100);

                T.get('users/lookup', { screen_name: tmp }, function(err, data, response) {
                    console.log(data)

                });



            }else{
                T.get('users/lookup', { screen_name: list }, function(err, data, response) {
                    console.log(data)

                });
            }



            callback(list);
        },

    });


};




/**
 * Created by tomasztkaczyk on 14.06.17.
 */
