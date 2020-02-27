import { expect } from 'chai'

import { Direction } from '../src/ts/enums/app_enums'
import characters from '../src/resources/characters'
import Player from '../src/models/player/Player'

describe('Player', () => {
  describe('create from POJO', () => {

    it('should return correct values', () => {
      const c = characters[1];
      const player = Player.createFromPojo(c);

      expect(player.name).to.equal(c.name);
      expect(player.title).to.equal(c.title);

      const position = player.position;

      expect(position.x).to.equal(7);
      expect(position.y).to.equal(7);
      expect(position.z).to.equal(1);

      const stats = player.stats;

      expect(stats.damage).to.equal(c.stats.damage);
      expect(stats.tearDelay).to.equal(c.stats.tear_delay);
      expect(stats.range).to.equal(c.stats.range);

      const hearts = player.hearts;

      expect(hearts.red).to.equal(c.hearts.red);
      expect(hearts.blue).to.equal(c.hearts.blue);

      const consumables = player.consumables;

      expect(consumables.keys).to.equal(c.consumables.keys)
      expect(consumables.bombs).to.equal(c.consumables.bombs)
      expect(consumables.coins).to.equal(c.consumables.coins)
    })
  })
  describe('move()', () => {
    it('should move the player up, down, right, left', () => {
      const c = characters[1];
      const player = Player.createFromPojo(c);

      expect(player.position.x).to.equal(7);
      expect(player.position.y).to.equal(7);

      player.move(Direction.UP);

      expect(player.position.x).to.equal(7);
      expect(player.position.y).to.equal(6);

      player.move(Direction.DOWN);

      expect(player.position.x).to.equal(7);
      expect(player.position.y).to.equal(7);

      player.move(Direction.LEFT);

      expect(player.position.x).to.equal(6);
      expect(player.position.y).to.equal(7);

      player.move(Direction.RIGHT);

      expect(player.position.x).to.equal(7);
      expect(player.position.y).to.equal(7);
    })
  })
})
