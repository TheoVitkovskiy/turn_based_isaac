const assert = require('assert')

const characters = require('../src/resources/characters')
const Player = require('../src/models/Player')

describe('Player', () => {
  describe('create initial', () => {
    it('should return correct values', async () => {
      const c = characters[0];
      const player = await new Player(c);

      assert.equal(player.getName(), c.name);
      assert.equal(player.getTitle(), c.title);

      const stats = player.getStats();
      assert.equal(stats.getDamage(), c.stats.damage);
      assert.equal(stats.getTearDelay(), c.stats.tear_delay);
      assert.equal(stats.getRange(), c.stats.range);

      const hearts = player.getHearts();
      assert.equal(hearts.getRed(), c.health.red);
      assert.equal(hearts->getBlue(), c.health.blue);

      const consumables = player.getConsumables();
      assert.equal(consumables., c.consumables.keys);
      assert.equal(p.getNumberOfBombs(), c.consumables.bombs);
      assert.equal(p.getNumberOfCoins(), c.consumables.coins);
    })
  })
})
