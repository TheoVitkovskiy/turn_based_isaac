const assert = require('assert')

const Player = require('../src/models/player/Player')

describe('Room', () => {
  describe('create initial', () => {
    it('should return correct values', async () => {
      const roomPOJO = {
        layout : 
        [
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
          ['x', 'x', 'x', 'x', 'x', 'x', 'x'],  
        ]

      }
      const player = await new Player(c);

      assert.equal(player.getName(), c.name);
      assert.equal(player.getTitle(), c.title);

      const stats = player.getStats();

      assert.equal(stats.damage, c.stats.damage);
      assert.equal(stats.tearDelay, c.stats.tear_delay);
      assert.equal(stats.range, c.stats.range);

      const hearts = player.getHearts();

      assert.equal(hearts.red, c.hearts.red);
      assert.equal(hearts.blue, c.hearts.blue);

      const consumables = player.getConsumables();

      assert.equal(consumables.keys, c.consumables.keys);
      assert.equal(consumables.bombs, c.consumables.bombs);
      assert.equal(consumables.coins, c.consumables.coins);
    })
  })
})
