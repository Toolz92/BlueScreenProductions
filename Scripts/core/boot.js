//state loads asset files for menu screen
var bootState = {
    //place menu assets to be loaded here
    preload: function(){
        game.load.image('title', "././Assets/img/tempGameAssets/gameTitle.png");
        game.load.image('box', "././Assets/img/tempMenuAssets/bttnOutline.png");
        game.load.image('background', "././Assets/img/tempMenuAssets/BackgroundMenu.png");
        game.load.image('controllerInstruction', "././Assets/img/tempMenuAssets/controllerSetup.png");
        game.load.spritesheet('playBttn', "././Assets/img/tempMenuAssets/playSprite.png",176,66,2);
        game.load.spritesheet('optionsBttn', "././Assets/img/tempMenuAssets/optionsSprite.png",280,66,2);
        game.load.spritesheet('credits', "././Assets/img/tempMenuAssets/creditBttn.png",50,50,2);
        game.load.spritesheet('play', "././Assets/img/tempMenuAssets/startSprite.png",210,68,2);
        game.load.spritesheet('exit', "././Assets/img/tempMenuAssets/exitSprite.png",165,65,2);
        game.load.image('creditMenu', "././Assets/img/tempMenuAssets/creditMenu.png");
        game.load.image('playAgain', "././Assets/img/tempMenuAssets/playAgain.png");
        game.load.audio('menuMusic',"././Assets/sound/Music/MenuMusic.wav");
        game.load.audio('gameOverMusic',"././Assets/sound/Music/Die.wav");
    },
    //code to make assets goes here
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;

        game.global.menuMusic = game.add.sound('menuMusic', 1, true);
        game.state.start('menu');
    }
};