/*--------help-------------------------------------*/
$(document).ready(function(){
	 $( "#control" ).dialog({ autoOpen: false });
	    $( "#govern" ).click(function() {
	         $( "#control" ).dialog( "open" );
	    });

	$( "#introduction" ).dialog({ autoOpen: false });
	    $( "#microPC" ).click(function() {
	        $( "#introduction" ).dialog( "open" );
	    });
});