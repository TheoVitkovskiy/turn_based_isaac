'use strict';

const { prompts } = require('../../modules/interactive_prompt');
const characters = require('../../resources/characters');
const Consumables = require('./structs/Consumables');
const Hearts = require('./structs/Hearts');
const Stats = require('./structs/Stats');

module.exports = class Player {

    constructor(playerPojo = null) {
      return (async () => {
        const pickCharacter = async () => {
          const characterName = await prompts({
            type: 'autocomplete',
            name: 'characterSelect',
            message: 'pick your character',
            choices: characters.map(c => ({
              title: c.title,
              value: c.name
            }))
          });
          return characters.find(c => c.name === characterName); 
        }

        let c = playerPojo;
      
        if (c === null)
          c = await pickCharacter();
      
        this.name = c.name;
        this.title = c.title;

        const hearts = new Hearts();
        hearts.red = c.hearts.red;
        hearts.blue = c.hearts.blue;
        this.hearts = hearts;

        const stats = new Stats();
        stats.damage = c.stats.damage;
        stats.tearDelay = c.stats.tear_delay;
        stats.range = c.stats.range;
        this.stats = stats;

        const consumables = new Consumables();
        consumables.keys = c.consumables.keys;
        consumables.bombs = c.consumables.bombs;
        consumables.coins = c.consumables.coins;
        this.consumables = consumables;

        return this;
      })(); 
  }
  
  getName() {
    return this.name;
  }

  getTitle() {
    return this.title;
  }

  getHearts() {
    return this.hearts;
  }

  getConsumables() {
    return this.consumables;
  }

  getStats() {
    return this.stats;
  }
}
