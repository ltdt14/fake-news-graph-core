function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
}

$(document).ready(function () {
    console.log("here 2");
    $.get('static-api-req/articles.json', function (res) {
        console.log("here 2");
        if (res.results) {
            res.results.forEach(function (result) {
                $('#grid-container').append(

                    '<div class="side-pad col-lg-4 col-md-6 col-sm-6 col-xs-12" ' +
                    'data-href="/analysis?id=' + result.id + '">'
                        + '<div class="clickable-article col-lg-12">'
                            + '<div class="thumbnail-container">'
                                + '<a href="/analysis?id=' + result.id + '"> '
                                    + '<img class="article-thumbnail" src="'+ result.thumbnail + '"> '
                                + '</a>'
                            + '</div>'

                            + '<div class="article-info">'
                                + '<a href="/analysis?id=' + result.id + '"> '
                                    + '<h3>' + result.title + '</h3>'
                                + '</a>'
                                + '<table>'
                                    + '<tr>'
                                        + '<td> Source: '
                                            + '<a href="' + result.source + '"> '
                                                + extractRootDomain(result.source)
                                            + '</a>'
                                        + '</td>'
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
            });
        }
    });


});
