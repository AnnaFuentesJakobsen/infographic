// Load
/*$(window).load(function() {
  $("main").fadeIn(2000);
});
*/

$( "h1" ).hover(
  function() {
    $( this ).append( $( "<span> ^___^</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

$(document).ready(function(){
	$(".map-btn").click(function(){
		$(".map").fadeIn(2000);
	});
});

// Add Class

$(".map-btn").click(function(){
    $(".map-btn").addClass("hide-button");
});


// Toggle

$(document).ready(function(){
	$(".etiquette-btn").click(function(){
		$(".etiquette").toggle();
	});
});

$(document).ready(function(){
	$(".random-btn").click(function(){
		$(".random").toggle();
	});
});

