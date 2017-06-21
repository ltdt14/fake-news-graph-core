$(document).ready(function () {

    $.get('static-api-req/wordcloud.json', function (res) {
        console.log(res);

        if (res) {
            var svg = d3.select("svg");

            var positionInfo = document.getElementById("wordcloud").getBoundingClientRect();
            console.log(height);

            var height = positionInfo.height;
            var width = positionInfo.width;

            console.log(height);
            console.log(width);

            var fill = d3.scale.category20();


            d3.layout.cloud().size([width, height])
                .words(res)
                .rotate(function() { return 0; })
                .font("Oswald")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();

            function draw(words) {
                var reddark = "#c51111";
                var bluedark = "#21384e";
                var bluelight = "#1256e1";

                d3.select("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + ", " + height / 2 + ")")
                    .style("fill", "#22384f")
                    .selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", function(d) { return d.size + "px"; })
                    .style("font-family", "Oswald")
                    .style("fill", function(d, i) {
                        x = Math.random();
                        if (x < 0.33) {
                            return bluedark;
                        } else if (x < 0.66) {
                            return reddark;
                        } else {
                            return bluelight;
                        }
                    })
                    .attr("text-anchor", "middle")
                    .attr("transform", function(d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function(d) { return d.text; })
                    .on("click", function(d) {
                        alert(d.text);
                    });
            }


        }

        var gbox = document.getElementsByTagName("g")[0].getBoundingClientRect();
        console.log("G-dimensions: " + gbox.width + "x" + gbox.height);
        $("#wordcloud").height(gbox.height);
        $("#wordcloud").width(gbox.width);

        $("g").attr('transform', 'translate(' + gbox.width / 2 + ',' + gbox.height / 2 + ')');
    });
});
