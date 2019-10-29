var twitchUsers =  ["ESL_SC2", "seebotschat", "OgamingSC2", "cretetion", "freecodecamp", "streamerhouse", "nocopyrightsounds", "storbeck", "habathcx", "brunofin", "RobotCaleb", "noobs2ninjas", "comster404", "pokimane"];

var onlineStatus = [];
var channelURL = [];
var channelName = [];
var logo = [];
var nowPlaying = [];


function twitchStreams(i) {
	$.ajax({
		type: 'GET',
		url: 'https://wind-bow.gomix.me/twitch-api/streams/' + twitchUsers[i]  + '?callback=?',
		dataType: 'jsonp',
		success: function(result) {
			
			if (result.stream === null) {
				nowPlaying[i] = "----";
				onlineStatus[i] = "offline";
			} else if (result.stream === undefined) {
				nowPlaying[i] = "Account Closed";
				onlineStatus[i] = "offline";
			} else {
				nowPlaying[i] = result.stream.game;
				onlineStatus[i] = "online";
			};
			//console.log(onlineStatus[i] + ' streams ' + i);
		}
	});
}


function twitchChannels(i) {
	$.ajax({
		type: 'GET',
		url: 'https://wind-bow.gomix.me/twitch-api/channels/' + twitchUsers[i]  + '?callback=?',
		dataType: 'jsonp',
		success: function(data) {
			//console.log(onlineStatus[i] + ' onlineStatus ' + i);
			channelURL[i] = data.url;
						
			if (data.display_name != undefined){
				channelName[i] = data.display_name;
				logo[i] = data.logo;
			}else{
				channelName[i] = twitchUsers[i];
				nowPlaying[i] = "<strong style='color: red;'>Account Closed</strong>";
				logo[i] = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=:(";
			}
			
			$("ul").append('<a class="well list-anchor drop-shadow" target="_blank" href="' +
										 channelURL[i] + '">' + '<li><h3><img class="drop-shadow" src="' +
										 logo[i] + '" alt="Twitch.tv Status Viewer by SpoonerTuner.com" height="42" width="42">&nbsp;&nbsp;&nbsp;'  +
										 channelName[i] + '</h3><h6>' +
										 nowPlaying[i] + '</h6>' + '<div>' +
										 onlineStatus[i] + '</div></li></a>'
										);
		}
	});
}


function twitchTVinfo() {
	for (var i=0; i < twitchUsers.length; ++i) {
		twitchStreams(i);	
	}
	setTimeout(function(){
		for (var i=0; i < twitchUsers.length; ++i) {
			twitchChannels(i)
		}},700);
}


$(document).ready(function() {
	$("#getResult").on("click", function() {
		$("ul").empty();
		twitchTVinfo();		
		
	});
});