$(document).ready(function(){
    $.get('static-api-req/results.json', function(res){
        console.log(res.name);
    })
});
