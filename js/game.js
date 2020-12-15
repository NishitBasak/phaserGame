// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preLoad = function(){
    // load images
    this.load.image('background', 'asset/background.png');
    this.load.image('player', 'asset/player.png');
}

// called once after the preload ends
gameScene.create = function(){
    // create background sprite
    let bg = this.add.sprite(0,0,'background'); 
    bg.setOrigin(0,0);
}

// Set the configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
}

// Create a new game, pass the configuration
let game = new Phaser.Game(config);