// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
}

// called once after the preload ends
gameScene.create = function(){
    // create background sprite
    let bg = this.add.sprite(0,0,'background'); 
    bg.scaleY = .8;
    bg.setOrigin(0,0);
    /* bg.setPosition(640/2,360/2); */

    // PLAYER
    let player = this.add.sprite(50,180,'player');
    player.setScale(.65);

    // ENEMY 1
    this.enemy1 = this.add.sprite(200,100,'enemy');
    this.enemy1.flipX = true;
    this.enemy1.setScale(.65, .6);

    // ENEMY 2
    this.enemy2 = this.add.sprite(400,250,'enemy');
    this.enemy2.flipX = true;
    this.enemy2.setScale(.85,.75);
}

// This function is clalled upto 60 times per second
gameScene.update = function(){
    if(this.enemy1.scaleX<1.1){
        this.enemy1.scale += .01;
    }
    // this.enemy1.scaleX += .01;
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