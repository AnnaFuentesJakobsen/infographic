$(document).ready(function(){
	$("button").click(function(){
		$(".basicFacts").toggle(),
		$(".hide-this").toggle();
	});
});
$(window).load(function() {
  $("main").fadeIn(2000);
});



$(document).ready(function() {
	$("#weatherbtn").click(function() {
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=f34fe67934cfb321117737abf83379e0', 
			function(wRes) { 
			//document.write(wRes.id); 
				$.each(wRes.weather, function(i, weather) {
					var tempeture = "<div>";
					tempeture += "<p>" + weather.id + "</p>" + "<br>";
					tempeture += "<p>" + weather.main + "</p>" + "<br>";
					/*pics += "<em>" + item.author + "</em>" + "<br>";
					pics += "<p>" + item.date_taken + "</p>" + "<br>";
					pics += "<button id='" + i + "' author-id='" + item.author_id + "'>" + "Users favorites" + "</button>";
					*/
					tempeture += "</div>";

					$("#weatherLog").append(tempeture);

					console.log(tempeture);
				});
			});
		});
});


