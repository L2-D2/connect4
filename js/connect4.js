var fieldSizeY = 6;
var fieldSizeX = 7;
var field = [];
//~ field = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]];

function createBoardAndField() {
	for (var i = 0; i < fieldSizeY; i++) {
		$( ".container-fluid" ).append( "<div class='row rowNum-" + i +"'></div>" );
		var fieldRow = new Array();
		for (var j = 0; j < fieldSizeX; j++) {
			var num = (i*7)+j;
			$( ".rowNum-" + i ).append( "<div class='col-xs-push-2 col-xs-1 colNum-" + j + " pocket-" + i +"-" + j + "'></div>" );
			fieldRow.push('_');
		}
		console.log("building row " + i);
		field[i] = fieldRow;
	}
}
function writeField() {
	for (var row = 0; row < fieldSizeY; row++) {
		console.log(row + '|' + field[row] + '|');
	}
}
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
					var color = 'red';
					break;
			}
			$( ".pocket-"+i+"-"+j ).addClass(color);
		}
	}
}
function dropToken(column, team) {
	for (var row = field.length; row > 0; row--) {
		if (field[row - 1][column] === '_') {
			field[row - 1][column] = team;
			break;
		}
	}
};


function checkWinnerUp(x,y) {
	var thisToken = field[y][x];
	for (var i = 1; i < 4; i++) {
		if (field[y - i][x] !== thisToken) return false;
	}
	if (thisToken !== '_') return true;
	else return false;
};

function checkWinnerRight(x,y) {
	var thisToken = field[y][x];
	for (var i = 1; i < 4; i++) {
		if (field[y][x + i] !== thisToken) return false;
	}
	if (thisToken !== '_') return true;
	else return false;

};


function checkWinnerUpRight(x,y) {
	var thisToken = field[y][x];
	for (var i = 1; i < 4; i++) {
		if (field[y - i][x + i] !== thisToken) return false;
	}
	if (thisToken !== '_') return true;
	else return false;
};


function checkWinnerUpLeft(x,y) {
	var thisToken = field[y][x];
	for (var i = 1; i < 4; i++) {
		if (field[y - i][x - i] !== thisToken) return false;
	}
	if (thisToken !== '_') return true;
	else return false;
};

function check4Winner() {
	for (var y = (field.length - 1) ; y > -1; y--) {
		for (var x = (field[y].length - 1); x > -1; x--) {
			var goodUpwards = (y > 2);
			var goodToRight = (x < (field[y].length - 3));
			var goodToLeft = (x > 2);
			var thisTeam = field[y][x];
			if (goodUpwards) {
				if (checkWinnerUp(x,y)) {
					gameOver(thisTeam);
				};
			};
			if (goodToRight) {
				if (checkWinnerRight(x,y)) {
					gameOver(thisTeam);
				};
			};
			if (goodToRight && goodUpwards) {
				if (checkWinnerUpRight(x,y)) {
					gameOver(thisTeam);
				};
			};
			if (goodUpwards && goodToLeft) {
				if (checkWinnerUpLeft(x,y)) {
					gameOver(thisTeam);
				};
			};
		};
	};
};

function gameOver(team) {
	gameStatus.gameOverVar = true;
	gameStatus.winner = team;
};

function getDropFromAlert(team) {
	var column = eval(prompt('Drop token in which column? (0-6)'));
	dropToken(column, team);
};

function getDropFromClick() {
	for (var i = 0; i < fieldSizeX; i++) {
		
		$( "colNum-"+i ).on( "click", function() {
			dropToken(i, gameStatus[turn]);
			if (gameStatus.turn === 'x') {
				gameStatus.turn = 'o';
			} else {
				gameStatus.turn = 'x';
			}
		});
	}
};

function gameStatus() {
	this.gameOverVar = false;
	this.winner = '';
	this.turn = 'x';
	this.field = field;
};

function theGame() {
	console.log('Welcome to Connect 4!');
	drawField();
	while (!gameStatus.gameOverVar) {
		takeTurn("x");
		takeTurn("o");
		// console.log("It's X's turn!");
		// getDropFromAlert("x");
		// writeField();
		// drawField();
		// check4Winner();
		// console.log("It's O's turn!");
		// getDropFromAlert("o");
	}
	drawField();
	alert(gameStatus.winner + " wins the game!")
	console.log(gameStatus.winner + " wins the game!")
};


function takeTurn(team) {
		getDropFromAlert(team);
		writeField();
		drawField();
		check4Winner();
};