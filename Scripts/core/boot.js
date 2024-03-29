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
        game.load.image('CharacterSelectText', "././Assets/img/tempMenuAssets/CharacterSelectText.png");
        game.load.audio('menuMusic',"././Assets/sound/Music/MenuMusic.wav");
        game.load.audio('gameOverMusic',"././Assets/sound/Music/GameOver.ogg");
        game.load.audio('buttonSwitch',"././Assets/sound/Misc/ButtonSwitch.wav")
        game.load.audio('buttonForward',"././Assets/sound/Misc/ButtonForward.wav");
        game.load.audio('DefaultMusic', "././Assets/sound/Music/GameMusic.wav");
        game.load.audio('CityMusic',"././Assets/sound/Music/City.wav");
        game.load.audio('CandyLandMusic',"././Assets/sound/Music/CandyLand.wav");
        game.load.audio('DesertMusic',"././Assets/sound/Music/Desert.wav");
        game.load.audio('GrasslandMusic',"././Assets/sound/Music/GrassLand.wav");
        game.load.audio('SnowMusic',"././Assets/sound/Music/Snow.wav");
        game.load.spritesheet('AdventureSplash', "Assets/img/Character/AdventurerSplash.png", 398 ,586);
        game.load.spritesheet('SoldierSplash', "Assets/img/Character/SoldierSplash.png", 398 ,586);
        game.load.spritesheet('LevelSplash', "././Assets/img/tempMenuAssets/MapSelect.png", 768 ,422);
        game.load.spritesheet('soundIcons', "././Assets/img/tempMenuAssets/sound_icon.png", 100, 100);
        game.load.image('sliderBar', "././Assets/img/tempMenuAssets/sliderBar.png");
        game.load.image('sliderCircle', "././Assets/img/tempMenuAssets/sliderCircle.png");
        game.load.image("ArrowUp", "././Assets/img/tempMenuAssets/UpArrow.png");
        game.load.image("ArrowDown", "././Assets/img/tempMenuAssets/DownArrow.png");
        game.load.image("ArrowLeft", "././Assets/img/tempMenuAssets/LeftArrow.png");
        game.load.image("ArrowRight", "././Assets/img/tempMenuAssets/RightArrow.png");


    },
    //code to make assets goes here
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;

        game.global.menuMusic = game.add.sound('menuMusic', 1, true);
        game.state.start('menu');
    }
};