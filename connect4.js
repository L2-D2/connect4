var fieldSizeX = 7;
var fieldSizeY = 6;
var field = new Array();
//~ field = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]];


for (var i = 0; i < fieldSizeY; i++) {
	var fieldRow = new Array();
	for (var j = 0; j < fieldSizeX; j++) {
		fieldRow.push('_');
	}
	field[i] = fieldRow;
};

function writeField() {
	for (var row = 0; row < fieldSizeY; row++) {
		console.log(row + '|' + field[row] + '|');
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
		for (var column = 0; column < (field[row].length - 4); column++) {
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
	for (var row = 0; row < (field.length - 3); row++) {
		for (var column = 0; column < field[row].length; column++) {
			if (field[row][column] === field[row + 1][column] === field[row + 2][column] === field[row + 3][column]) {
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
	for (var row = 0; row < field.length - 3; row++) {
		for (var column = 0; column < (field[row].length - 3); column++) {
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
	for (var row = 3; row < (field.length - 1); row++) {
		for (var column = 0; column < (field[row].length - 3); column++) {
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
		checkWinner();
		console.log("It's X's turn!");
		var turn1 = eval(prompt('Drop token in which column? (0-6)'));
		dropToken(turn1, 'x');
		writeField();
		checkWinner();
		console.log("It's O's turn!");
		var turn2 = eval(prompt('Drop token in which column? (0-6)'));
		dropToken(turn2, 'o');
	}
	console.log(checkWinner())
};

connect4();

