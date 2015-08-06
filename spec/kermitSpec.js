describe("game", function(){

    it("should be active", function() {
      expect(game.gameover).toEqual(false);
    });

    it("should have score of 0 on game start up", function(){
      expect(game.score).toEqual(0);
    });

    it("should add score when land on lillypad", function(){
      frog.lands(true)
      expect(game.score).toEqual(1);
    });

     it("should be gameover when frog is dead", function(){
      frog.lands(false)
      expect(game.gameover).toEqual(true);
    });

     it("game should reset when gameover", function(){
      game.gameReset()
      expect(game.score).toEqual(0);
      expect(game.gameover).toEqual(false);
      expect(frog.alive).toEqual(true);
      expect(frog.landingTime).toEqual(frog.landingTime);
    });

});


describe("Frog", function() {

    it("should move two steps when pressed on Q", function() {
       frog.move("q");
    expect(frog.distance).toEqual(2);
       });

    it("should move three steps when pressed on P", function() {
       frog.move("p");
    expect(frog.distance).toEqual(3);
       });

    it("The frog should be alive", function(){
      expect(frog.alive).toEqual(true);
    });

    // it("The frog should die if the frog is stationary for 2 seconds or more", function(){
    //   setTimeout( isAlive(), 2000).toEqual(false);
    // });

    it("The frog should know the time", function(){
      expect(frog.timer()).toBeGreaterThan(0);
    });

    it("should be alive when lands on lilypad", function(){
      frog.lands(true)
      expect(frog.alive).toEqual(true);
    });

    it("should be dead when not landing on lilypad", function(){
      frog.lands(false)
      expect(frog.alive).toEqual(false);
    });

});


describe("lilyPad", function(){

    it("Should know it's state", function() {
       expect(lilyPad).toContain(true);
       expect(lilyPad).toContain(false);
    });

    it("the track should have 20 items", function (){
      expect(lilyPad.length).toEqual(20);
    });

    it("Lilipad track should move when jump is made", function(){
      previousLilypad = lilyPad;
      game.moveLilypad(2);
      expect(lilyPad[0]).toEqual(previousLilypad[2]);
      expect(lilyPad[19]).not.toBe(null);
    });


});



