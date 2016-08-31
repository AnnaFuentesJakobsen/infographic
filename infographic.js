$(document).ready(function() {
	$("#weatherbtn").click(function() {
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=f34fe67934cfb321117737abf83379e0', 
			function(wRes) { 
			//document.write(wRes.id); 
				$.each(wRes.weather, function(i, weather) {
					var tempeture = "<div>";
					tempeture += "<p>" + weather.id + "</p>";
					tempeture += "</div>";

					$("#weatherLog").append(tempeture);

					console.log(tempeture);
				});
			});
		});
});