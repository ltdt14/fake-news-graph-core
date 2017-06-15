$(document).ready(function () {
    $.get('static-api-req/results.json', function (res) {
        if (res.results) {
            res.results.forEach(function (result) {
                $('#tablebody').append(
                    '<tr class="clickable-row" data-href="/analysis?id=' + result.id + '">' +
                        '<td>' + result.title + '</td>' +
                        '<td>' + result.type + '</td>' +
                        '<td>' + result.fakeState + '</td>' +
                    '</tr>'
                )
            });
            $(".clickable-row").click(function() {
                window.location = $(this).data("href");
            });
        }
    });


});
