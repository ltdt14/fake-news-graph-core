var sheetrock = require('sheetrock');
var _ = require('lodash');
var Twit = require('twit');

var sheets = {
    hashtags: "https://docs.google.com/spreadsheets/d/134BBsj9gFKYv8strppLG1_Ttox1v_FGLNO0NsRdXJ6Q/edit#gid=762605217",
    politiker: "https://docs.google.com/spreadsheets/d/134BBsj9gFKYv8strppLG1_Ttox1v_FGLNO0NsRdXJ6Q/edit#gid=907447002"
};

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
            var ctn = response.rows.length;
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

            if(ctn>100){
                let parts = sliceIn100(arr,ctn);
                let bigUserList = getAllResults(parts);
                bigUserList.then(response => {
                    callback(response);
                })

            }else{
                list.slice(0,list.length-1);

                T.get('users/lookup', { screen_name: list }, function(err, data, response) {
                    //console.log(data);
                    var tmp= _.filter(data, function(o) { return o.id; });

                    callback(tmp);

                });
            }



        },

    });


};




function getAllResults(arr) { // returns a promise for 250 results
    var totalResults = [];
    var iter=0;
    var stringOfNames = arr[iter].toString();
    var prom = T.get('users/lookup', { screen_name: stringOfNames });
    iter++;
    for (var i = 1; i <= arr.length-1; i++) { // chain four more times
        prom = prom.then(results => {
                //console.log(resuX^lts.data);
                let ctr=i;

                var tmp =_.map(results.data, function(n) {
                    return n.id;
                });
                totalResults = totalResults.concat(tmp);

                stringOfNames = arr[ctr-1].toString();
               // iter++;
                return T.get('users/lookup', { screen_name: stringOfNames });
    });
    }
    return prom.then( results => {
                    var tmp= _.map(results.data,'id');
                    totalResults=totalResults.concat(tmp)
                    return totalResults;
    } );
}

function sliceIn100(arr,ctn) {
    var partsAmmount = Math.ceil((ctn / 100));

    var tmp;
    var result = new Array;

    for(i=0; i<partsAmmount;i++){
        tmp =  _.take(arr, 100);
        arr =_.drop(arr, 100);
        result.push(tmp);
    }
    return result;
}


/**
 * Created by tomasztkaczyk on 14.06.17.
 */
