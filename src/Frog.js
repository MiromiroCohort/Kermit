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
      }else{
        this.alive = false;
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


  lilyPad = []
  for (var i=0;i<20;i++) {
    var trueFalse = [true, false];

    lilyPad.push(trueFalse[Math.floor(Math.random() * trueFalse.length)]);
  }

var game={
  gameover: false,
  score: 0,
}