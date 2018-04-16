let item = null;

// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// our game's configuration
let config = {
  type: Phaser.CANVAS,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: gameScene // our newly created scene
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);


// load asset files for our game
gameScene.preload = function() {
  // load images
  this.load.image('grill', 'assets/images/grill.jpg');
  this.load.image('cooked', 'assets/images/cooked-burger.jpg');
  this.load.image('raw', 'assets/images/raw-burger.jpg');
};

// executed once, after assets were loaded
gameScene.create = function() {
  this.add.sprite(0, 0, 'grill');
  item = this.add.sprite(140, 500, 'raw').setInteractive();
  this.input.setDraggable(item);

  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });
}