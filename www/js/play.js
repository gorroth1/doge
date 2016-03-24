// State: DogeDodge.Play

'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~Booting the DogeDodge ~~~\n Compliments of Skilstak", 
             "color:#fdf6e3;  background:#073642");
  },

  preload: function () {
    this.load.image('background', 'assets/deod.png');
    this.load.spritesheet('dodger', 'assets/arnold.png',17,28,2);
    this.load.spritesheet('killer', 'assets/deod2.png',32,48,5);
  },

  create: function () {
  this.background = this.add.tileSprite(0,0,320,568,"background");
  this.background.autoScroll(0,50);
  this.background.scale.set(1);
  this.dodger = this.add.sprite(160,510, 'dodger');
          
  this.dodger.smoothed = false;
  this.dodger.scale.set(2);
  this.dodger.anchor.set(0.5,0.5);
  this.dodger.animations.add('blink');
  this.dodger.animations.play('blink',4,true);
  
  this.killer = this.add.sprite(160,50, 'killer');
  this.killer.smoothed = false;
  this.killer.scale.set(2);
  this.killer.anchor.set(0.5,0.5) ;
  this.killer.animations.add('blink');
  this.killer.animations.play('blink',12,true);
  this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    this.fallingobject.y += 5;

    if (this.cursors.left.isDown) { 
      this.dodger.x -= 10;
    }
    if (this.cursors.right.isDown) {
      this.dodger.x += 10;
    }
    if (this.fallingobject.y >568) {
      this.fallingobject.y = -10
      this.fallingobject.x = game.rnd.integerInRange(1,320);
     }
  }
};
