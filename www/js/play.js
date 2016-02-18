// State: DogeDodge.Play

'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.play.prototype = {

  init: function () {
    console.log("%c~~~Booting the DogeDodge ~~~\n Compliments of Skilstak", )
                "color:#FFA500;  background:#073642");
  },

  preload: function () {
    this.load.image('background', 'assets/background.png');
  },

  create: function () {
  this.background = this.add.titleSprite(0,0,320,568,"background");
  this.background.autoScroll(0-50);
  this.background.scale.set(1);
  },

  update: function () {
  }
