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
        return 2;
      }
      if (key === "p"){
        this.distance=3;
        return 3;
      }
     }
}

function pushLilyPad()
{
  var trueFalse = [true, false];
   var current_length=lilyPad.length;
    console.log("push lilyPad");
    if (((lilyPad[current_length-2]) || (lilyPad[current_length-1]))&&(current_length>2))
    {


      lilyPad.push(trueFalse[Math.floor(Math.random() * trueFalse.length)]);
      console.log(lilyPad[current_length])
    }
    else
    {
      console.log("here");
      lilyPad.push(true);
    }
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
function fade_lilypad(speed)
{
  for (var i=0;i<10;i++)
    {
        if (lilyPad[i] ===false)
        {
            // $($(".lilypad")[i]).fadeTo(speed,0);
            $($(".lilypad")[i]).css("opacity",0);
        }
        else
        {
          $($(".lilypad")[i]).css("opacity",100);

        }
    }
}
function frog_jump(length)
{
  if (length===2){time=400}
    if (length ===3){time=600}
  $(".frog img").animate( {marginTop: '-=100px'}, time);
    $(".frog img").animate( {marginTop: '+=100px'}, time);
}

$(document).ready(function(){
   fade_lilypad("fast");


 $("#game_start").click(function() {
    $( ".bg_landscape" ).addClass( "x1" );
    $( ".bg_water" ).addClass( "x2" );


  });


   $(document).keydown(function() {
      if (event.which === 81)
        { console.log("q");
          console.log();
          move= frog.move("q");

        }
      if (event.which === 80)
      {
        console.log("p");
        console.log(frog);
        move=frog.move("p")


      }
      frog_jump(move);

      for(var i=0;i<move;i++)
      {  game.moveLilypad(1);
        fade_lilypad("slow");
      }
      // game.moveLilypad(move);
      // fade_lilypad("slow");
      frog.lands(lilyPad[0]);
      if(!frog.alive)
      {
          alert("Your frog has died. Your current score is"+game.score);

      }

    });


});
