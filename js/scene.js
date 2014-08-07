$(document).ready(function() {
	//generate 6 rows of 7 collumns of col-xs-1s
	//Numbered from top left(0) to bottom right(41)
	createBoard();
	connect4();

});

function createBoard() {
	for (var i = 0; i < fieldSizeY; i++) {
		$( ".container-fluid" ).append( "<div class='row rowNum-" + i +"'></div>" );
		var fieldRow = new Array();
		for (var j = 0; j < fieldSizeX; j++) {
			var num = (i*7)+j;
			$( ".rowNum-" + i ).append( "<div class='col-xs-1 colNum-" + j + " pocket-" + i +"-" + j + "'></div>" );
			fieldRow.push('_');
		};
		console.log("building row " + i);
		field[i] = fieldRow;
	};
};
