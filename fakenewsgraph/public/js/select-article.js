$(document).ready(function () {
    console.log("here 2");
    $.get('static-api-req/articles.json', function (res) {
        console.log("here 2");
        if (res.results) {
            res.results.forEach(function (result) {
                console.log(result.title);
                $('#grid-container').append(

                    '<div class="side-pad col-lg-4 col-md-6 col-sm-6 col-xs-12" ' +
                    'data-href="/analysis?id=' + result.id + '">'
                        + '<div class="clickable-article col-lg-12">'
                            + '<div class="thumbnail-container">'
                                + '<img class="article-thumbnail" src="'+ result.thumbnail + '">'
                            + '</div>'
                            + '<div class="article-info">'
                                + '<h3>' + result.title + '</h3>'
                                + '<table>'
                                    + '<tr>'
                                        + '<td> Source: ' + result.source + '</td>'
                                        + '<td class="text-right"> Retweets: ' + result.retweets + '</td>'
                                    + '</tr>'

                                    + '<tr>'
                                        + '<td colspan="2"> Date: ' + result.date + '</td>'
                                    + '</tr>'
                                + '</table>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                )
            }
            );
            $(".clickable-article").click(function() {
                window.location = $(this).data("href");
            });
        }
    });


});