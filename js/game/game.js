//javascript
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var version = "[Summer is coming] - Demo Game - Ulrich.S - 15/04/2015";
var gameContainer;
var style;
 var text;

function preload() {
	game.load.image('background','/game/asset/background.png');
	game.load.image('logoSml','/game/asset/logoSmall.png');
}

function create() {


	game.add.sprite(0,0,'background');
	game.add.sprite(25,25,'logoSml');

	style = { font: "15px Arial", fill: "#333333", align: "right" };
    text = game.add.text(game.world.centerY, 570, version, style);
}

function update() {
	console.log("[update]");
}