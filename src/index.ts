import Player from '../src/models/player/Player';

(async () => {
  const player = await Player.createFromCli();

  const stats = player.stats;
  console.log(stats.tearDelay);
})();
