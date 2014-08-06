$(document).ready(function() {
	//generate 6 rows of 7 collumns of col-xs-1s
	//Numbered from top left(0) to bottom right(41)
	createBoard();
	$( ".col-xs-1" ).on("click", function() {
		$( this ).addClass("red");
	});


});

function createBoard() {
	for (var i = 0; i < 6; i++) {
		$( ".container-fluid" ).append( "<div class='row rowNum-" + i +"'></div>" );
		for (var j = 0; j < 7; j++) {
			var num = (i*7)+j;
			$( ".rowNum-" + i ).append( "<div class='col-xs-1 colNum-" + j + " pocket-" + i +"-" + j + "'></div>" );
		};
		console.log("building row " + i);
	};
};
