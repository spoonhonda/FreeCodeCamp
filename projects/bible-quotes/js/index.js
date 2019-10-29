//all the JS code, CSS, HTML etc in this project was developed from scratch by David Spooner 
$(document).ready(function() {
	var html = "";
	var quoteToTweet = "";
	var authorToTweet = "";
	var twitterURL = "";
	var randomNumber = 0;
	var lastRandomNumber = 0;
	var currentImageNumber = 4;
	var totalNumberOfImages = 12;
	
	setTimeout(function() {$("#getVerse").trigger('click');},2);
	
	$("#getVerse").on("click", function() {
		
		//I created my own data json file that I am hosting on my own webserver at spoonertuner.com
		$.getJSON("http://spoonertuner.com/projects/bible-quotes/json/bible-verses.json", function(json) {
			
			randomNumber = Math.floor(Math.random() * json.length);
			
			while (randomNumber == lastRandomNumber) {
				randomNumber = Math.floor(Math.random() * json.length);
			}
			
			lastRandomNumber = randomNumber;
			quoteToTweet = json[randomNumber].quoteText;
			authorToTweet = json[randomNumber].author;
			
			html = "<i class='fa fa-quote-left'> </i> " + json[randomNumber].quoteText + "<br><i class='author'> — " + json[randomNumber].author + "</i>";
			
			if (currentImageNumber < totalNumberOfImages) {
				document.body.style.backgroundImage = "url('http://spoonertuner.com/projects/bible-quotes/images/" + currentImageNumber + ".jpg')";
				currentImageNumber++;
			} else if (currentImageNumber >= totalNumberOfImages) {
				document.body.style.backgroundImage = "url('http://spoonertuner.com/projects/bible-quotes/images/" + currentImageNumber + ".jpg')";
				currentImageNumber = 0;
			}
			
			//console.log(authorToTweet);
			
			$(".well").html(html);
		}); //end of $.getJSON
	});
	
	$("#shareOnTwitter").on("click", function() {
		twitterURL = "https://twitter.com/intent/tweet?hashtags=bible&related=spoonertuner&text=" + quoteToTweet + "  -" + authorToTweet;
		window.open(twitterURL, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
		
		document.body.style.backgroundImage = "url('http://spoonertuner.com/projects/bible-quotes/images/" + (currentImageNumber+1) + ".jpg')";
		
		//console.log(twitterURL);
		
		$(".well").html("<br>You just tweeted " + authorToTweet + " to the world! <br><br>");
	});
});
