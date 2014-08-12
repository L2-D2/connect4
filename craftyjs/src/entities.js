Crafty.e('2D, Canvas, Fourway, Gravity, Color')
	.attr({
		x: 0,
		y: 0,
		w: 100,
		h: 100})
	.color('#F00')
	.fourway(4)
	.gravity('Floor');


Crafty.e('Floor, 2D, Canvas, Color')
	.attr({
		x: 0,
		y: 250,
		w: 250,
		h: 10
	})
	.color('green');


