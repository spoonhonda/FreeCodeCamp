  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("http://spoonertuner.com/json-ajax-test/json/quotes_bible_verses.json", function(json) {

        var html = "";

        json.forEach(function(val) {

          html += "<div class = 'quote-box'>";
          html += val.quoteText + " " + "<br><br><br> - " + val.author + "<br>";
          html += "</div>";
        });

        $(".message").html(html);

      });
    });
  });
  