'use strict';

const { prompts } = require('../modules/interactive_prompt');
const characters = require('../resources/characters');

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

        let character = playerPojo;
      
        if (character === null)
          character = await pickCharacter();
      
        this.name = character.name;
        this.title = character.title;
        // hearts
        this.heartsRed = character.hearts.red;
        this.heartsBlue = character.hearts.blue;
        // stats
        this.damage = character.stats.damage;
        this.tearDelay = character.stats.tear_delay;
        this.range = character.stats.range;
        // consumables
        this.keys = character.consumables.keys;
        this.bombs = character.consumables.bombs;
        this.coins = character.consumables.coins;

        return this;
      })(); 
  }

  getDamage() {
    return this.damage;
  }

  getTearDelay() {
    return this.tear_delay;
  }

  getRange() {
    return this.range;
  }
}
