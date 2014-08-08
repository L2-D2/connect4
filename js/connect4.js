var fieldSizeX = 7;
var fieldSizeY = 6;
var field = new Array();
//~ field = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]];

function writeField() {
	for (var row = 0; row < fieldSizeY; row++) {
		console.log(row + '|' + field[row] + '|');
	};
};

function drawField() {
	for (var i = 0; i < fieldSizeY; i++) {
		for (var j = 0; j < fieldSizeX; j++) {
			switch (field[i][j]) {
				case "_":
					var color = 'empty';
					break;
				case "x":
					var color = 'black';
					break;
				case "o":
					var color = 'red'
					break;
			};
			$( ".pocket-"+i+"-"+j ).addClass(color);
		};
	};
};

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

function dropToken(column, team) {
	for (var row = field.length; row > 0; row--) {
		if (field[row - 1][column] === '_') {
			field[row - 1][column] = team;
			break;
		}
	}
};

function checkWinner() {
	//Check Horizontal
	for (var row = 0; row < field.length; row++) {
		for (var column = 0; column < (field[row].length - 3); column++) {
			if (field[row][column] === field[row][column + 1] === field[row][column + 2] === field[row][column + 3]) {
				if (field[row][column] === 'x') {
					gameOver = 1;
					console.log(gameOver + " = gameOver")
					winner = 'X';
					return winner;
				}
				if (field[row][column] === 'o') {
					gameOver = 1;
					winner = 'O';
					return winner;
				}
			}
		}
	};

	//Check Vertical
	for (var row = field.length - 1; row > 2; row--) {
		for (var column = 0; column < field[row].length; column++) {
			if (field[row][column] === field[row - 1][column] === field[row - 2][column] === field[row - 3][column]) {
				if (field[row][column] === 'x') {
					gameOver = 1;
					winner = 'X';
					return winner;
				}
				if (field[row][column] === 'o') {
					gameOver = 1;
					winner = 'O';
					return winner;
				}
			}
		}
	}
	//Check Decending Diagonal
	for (var row = 0; row < field.length - 4; row++) {
		for (var column = 0; column < (field[row].length - 4); column++) {
			if (field[row][column] === field[row + 1][column + 1] === field[row + 2][column + 2] === field[row + 3][column + 3]) {
				if (field[row][column] === 'x') {
					gameOver = 1;
					winner = 'X';
					return winner;
				}
				if (field[row][column] === 'o') {
					gameOver = 1;
					winner = 'O';
					return winner;
				}
			}
		}
	}
	//Check Ascending Diagonal
	for (var row = field.length - 1; row > 2; row--) {
		for (var column = 0; column < (field[row].length - 4); column++) {
			if (field[row][column] === field[row - 1][column + 1] === field[row - 2][column + 2] === field[row - 3][column + 3]) {
				if (field[row][column] === 'x') {
					gameOver = 1;
					winner = 'X';
					return winner;
				}
				if (field[row][column] === 'o') {
					gameOver = 1;
					winner = 'O';
					return winner;
				}
			}
		}
	}
};

function connect4() {
	console.log('Welcome to Connect 4!');
	var gameOver = 0;
	var winner = '';
	while (!gameOver) {
		writeField();
		drawField();
		checkWinner();
		console.log("It's X's turn!");
		var turn1 = eval(prompt('Drop token in which column? (0-6)'));
		dropToken(turn1, 'x');
		writeField();
		drawField();
		checkWinner();
		console.log("It's O's turn!");
		var turn2 = eval(prompt('Drop token in which column? (0-6)'));
		dropToken(turn2, 'o');
	}
	console.log(checkWinner())
};

