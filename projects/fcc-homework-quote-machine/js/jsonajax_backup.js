$(document).ready(function() {
console.log("made it to the jsonajax.js file");
    
    $("#getMessage").on("click", function() {
      $.getJSON("http://spoonertuner.com/json/cats.json", function(json) {

        var html = "";
	json.forEach(function(val) {
		var keys = Object.keys(val);
		html += "<div>";
		keys.forEach(function(key) {
		html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
		});
  		html += "</div><br>";
	});
      $(".message").html(html);
        
      });
    });

  });
