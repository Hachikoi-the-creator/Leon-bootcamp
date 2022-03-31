//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods, `FUNCTION CLASS`
function Fighter(catchPhrase, jumpSound, victoryYell) {
  self.catchPhrase = catchPhrase;
  self.jumpSound = jumpSound;
  self.victoryYell = victoryYell;

  function doTaunt() {
    console.log(`C'om!! come over here ${self.catchPhrase}`);
  }

  function doWin(fighterName) {
    console.log(`You couldn't win agains the great ${fighterName}`);
  }
}
