var frog={
    distance:  0,
    alive: true,
    // isAlive: function(){
    //   this.alive = false;
    // },
    landingTime: $.now(),
    lands: function(current_lilypad){
      if(current_lilypad === true){
        this.alive = true;
        game.score += 1;
      }else{
        this.alive = false;
        game.gameover = true;
      };
    },
    timer: function(){
      return $.now() - this.landingTime
    },
     move: function(key){
      if(key === "q" ){
        this.distance=2;
      }
      if (key === "p"){
        this.distance=3;
      }
     }
}

function pushLilyPad()
{
  var trueFalse = [true, false];

    lilyPad.push(trueFalse[Math.floor(Math.random() * trueFalse.length)]);
}


  lilyPad = []
  for (var i=0;i<20;i++) {
      pushLilyPad();
  }

var game={
  gameover: false,
  score: 0,
  gameReset: function(){
    this.score = 0,
    this.gameover = false,
    frog.alive = true,
    landingTime = $.now()
  },
  moveLilypad: function(distance)
  {
    for (var i = 0; i <distance; i++) {
      lilyPad.shift();
      pushLilyPad();
    };
  }
}
$(document).ready(function(){


});
