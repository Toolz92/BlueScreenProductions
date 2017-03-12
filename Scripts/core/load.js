//state preload's assets for playState
var loadState = {
    //place assets to be loaded here
    preload: function(){
        game.load.image('Tileset12', "Assets/TileMaps/Spritesheet.png");
        game.load.tilemap('tileMap', "Assets/TileMaps/map.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image('backgroundmap1', "Assets/TileMaps/BackgroundMap1.png");

        game.load.spritesheet('player1', "Assets/img/tempGameAssets/Player1.png", 60, 83);
        game.load.spritesheet('player2', "Assets/img/tempGameAssets/Player2.png", 60, 83);
        game.load.image('gun', "././Assets/img/tempGameAssets/gun.png");
        game.load.image('bFlame', "././Assets/img/tempGameAssets/bulletFlame.png");
        game.load.image('bPistol', "././Assets/img/tempGameAssets/bulletPistol.png");
        game.load.image('bMachineGun', "././Assets/img/tempGameAssets/bulletMachineGun.png");
        game.load.image('bShotgun', "././Assets/img/tempGameAssets/bulletShotgun.png");


        game.load.spritesheet('bigBubble', "././Assets/img/tempGameAssets/largeBubble.png",120,120);
        game.load.spritesheet('medBubble', "././Assets/img/tempGameAssets/mediumBubble.png",74,74);
        game.load.spritesheet('smallBubble',"././Assets/img/tempGameAssets/smallBubble.png",24,24);

        game.load.image('powerUp', "././Assets/img/tempGameAssets/powerUp.png");

        game.load.image('bloodVfx', "././Assets/img/tempGameAssets/BloodFX.png");
        game.load.spritesheet('FireworkVFX', "././Assets/img/tempGameAssets/FireworkVFX.png",32,32,4);

        game.load.audio('bulletSfx', "././Assets/sound/Guns/blaster.mp3");
        game.load.audio('bubbleSfx', "././Assets/sound/Blorp/Blorp.mp3");
        game.load.audio('shotgunSfx',"././Assets/sound/Guns/shotgun.wav");
        game.load.audio('machineGunSfx',"././Assets/sound/Guns/machineGun.wav");
        game.load.audio('sniperSfx',"././Assets/sound/Guns/sniper.mp3");
        game.load.audio('gameMusic', "././Assets/sound/Music/GameMusic.wav");

        game.load.image('playAgain', "././Assets/img/tempMenuAssets/playAgainO.png");
        game.load.image('exit', "././Assets/img/tempMenuAssets/btnExit.png");

    },
    //code to make assets goes here
    create: function(){
        game.state.start('play');
    },
    //code to update the assets goes here //changes are reflected in game render
    update: function(){

    }
};