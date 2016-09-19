
// Hover

$( "h1" ).hover(
  function() {
    $( this ).append( $( "<span> ^___^</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

//Fade in


$(".map-btn").click(function(){
	$(".map").fadeIn(2000);
});


// Append

$( "h2" ).append( $( "<span> ^___^</span>" ) );

// Hide

$(".map-btn").click(function(){
  event.preventDefault();
  $( this ).hide();
});

$(document).ready(function(e) {
       $('.map-btn').hover(function(){
			$button=$(this).text();
			$(this).text("Do it now!");
		},function(){
			$(this).text($button);
			});
   });



// Toggle

$( ".etiquette-section" ).addClass( "add-bgColor" );

$(document).ready(function(){
	$(".random-btn").click(function(){
		$(".random").toggle();
	});
});



