const Player = require('./models/Player');

(async () => {
  const player = await new Player();

  console.log(player.getDamage());
})();
